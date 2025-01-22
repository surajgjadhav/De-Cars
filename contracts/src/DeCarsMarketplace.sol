// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {DeCarsToken} from "./DeCarsToken.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import {OracleLib} from "./libraries/OracleLib.sol";

contract DeCarsMarketplace is Ownable, ReentrancyGuard {
    using OracleLib for AggregatorV3Interface;

    error DeCarsMarketplace__TokenNotListed();
    error DeCarsMarketplace__InsufficientAmount();
    error DeCarsMarketplace__TransferFailed();

    struct Details {
        uint256 id;
        bool listingStatus;
        address owner;
        string tokenURI;
    }

    uint256 private constant USDC_DECIMALS = 6; // USDC uses 6 decimals

    DeCarsToken internal immutable i_dcToken;
    AggregatorV3Interface internal immutable i_usdcUsdAggregator;
    IERC20 internal immutable i_usdc;

    uint256[] private s_mintedTokenIds;
    mapping(uint256 tokenId => Details details) internal s_idToDetails;

    modifier onlyListedTokensAllowded(uint256 _tokenId) {
        if (!s_idToDetails[_tokenId].listingStatus) {
            revert DeCarsMarketplace__TokenNotListed();
        }
        _;
    }

    constructor(address dcNFT_, address _usdcUsdAggregator, address _usdc) Ownable(msg.sender) {
        i_dcToken = DeCarsToken(dcNFT_);
        i_usdcUsdAggregator = AggregatorV3Interface(_usdcUsdAggregator);
        i_usdc = IERC20(_usdc);
    }

    function list(uint256 _tokenId, string memory _tokenURI, uint64 _subscriptionId, uint32 _gasLimit)
        external
        onlyOwner
        returns (string memory)
    {
        s_mintedTokenIds.push(_tokenId);
        s_idToDetails[_tokenId] =
            Details({id: _tokenId, listingStatus: true, owner: payable(address(this)), tokenURI: _tokenURI});
        i_dcToken.mintAndUpdatePrice(address(this), _tokenId, _tokenURI, _subscriptionId, _gasLimit);
        return _tokenURI;
    }

    function buy(uint256 _tokenId, uint256 _amount) external onlyListedTokensAllowded(_tokenId) {
        s_idToDetails[_tokenId].listingStatus = false;
        uint256 valuation = getValuationInUsdc(_tokenId);

        if (valuation > _amount) {
            revert DeCarsMarketplace__InsufficientAmount();
        }

        _depositeAmount(_amount);

        i_dcToken.safeTransferFrom(address(this), msg.sender, _tokenId);
    }

    function _depositeAmount(uint256 _amount) internal nonReentrant {
        bool success = i_usdc.transferFrom(msg.sender, address(this), _amount);
        if (!success) {
            revert DeCarsMarketplace__TransferFailed();
        }
    }

    function getListedCars() public view returns (Details[] memory) {
        uint256 count = s_mintedTokenIds.length;
        Details[] memory cars = new Details[](count);

        for (uint256 i = 0; i < count; i++) {
            cars[i] = s_idToDetails[s_mintedTokenIds[i]];
        }

        return cars;
    }

    function getMyCars() public view returns (Details[] memory) {
        uint256 totalCount = s_mintedTokenIds.length;
        uint256 ownerTokenCount = i_dcToken.balanceOf(msg.sender);
        Details[] memory cars = new Details[](ownerTokenCount);

        uint256 currentIndex = 0;
        Details memory tokenDetails;

        for (uint256 i = 0; i < totalCount; i++) {
            tokenDetails = s_idToDetails[s_mintedTokenIds[i]];
            if (tokenDetails.owner == msg.sender) {
                cars[currentIndex] = tokenDetails;
                currentIndex++;
            }
        }

        return cars;
    }

    function getValuationInUsdc(uint256 tokenId) public view returns (uint256) {
        uint256 valuation = i_dcToken.getPriceDetails(tokenId);

        (, uint256 price,,,) = i_usdcUsdAggregator.checkLatestRoundData();

        uint256 feedDecimals = i_usdcUsdAggregator.decimals();

        uint256 normalizedValuation = Math.mulDiv((valuation * price), 10 ** USDC_DECIMALS, 10 ** feedDecimals); // Adjust the valuation from USD (Chainlink 1e8) to USDC (1e6)

        return normalizedValuation;
    }
}
