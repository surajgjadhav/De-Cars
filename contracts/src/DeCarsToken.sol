// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DeCarsNFT} from "./token/DeCarsNFT.sol";
import {CarPriceDetails} from "./chainlink/CarPriceDetails.sol";
import {OwnerIsCreator} from "@chainlink/contracts/src/v0.8/shared/access/OwnerIsCreator.sol";

contract DeCarsToken is CarPriceDetails, DeCarsNFT, OwnerIsCreator {
    /**
     * Errors
     */
    error DeCarsToken__OnlyIssuerOrItselfIsAllowded();
    error DeCarsToken__OnlyAutomationForwarderOrOwnerCanCall();

    address internal s_issuer;
    address internal s_automationForwarderAddress;

    event SetIssuer(address indexed issuer);

    /**
     * Modifiers
     */
    modifier onlyIssuerOrItself() {
        if (msg.sender != address(this) && msg.sender != s_issuer) {
            revert DeCarsToken__OnlyIssuerOrItselfIsAllowded();
        }
        _;
    }

    modifier onlyAutomationForwarderOrOwner() {
        if (msg.sender != s_automationForwarderAddress && msg.sender != owner()) {
            revert DeCarsToken__OnlyAutomationForwarderOrOwnerCanCall();
        }
        _;
    }

    constructor(address functionRouterAddress_, bytes32 donId_)
        CarPriceDetails(functionRouterAddress_, donId_)
        DeCarsNFT()
    {}

    function setIssuer(address _issuer) external onlyOwner {
        s_issuer = _issuer;

        emit SetIssuer(_issuer);
    }

    function setAutomationForwarder(address automationForwarderAddress) external onlyOwner {
        s_automationForwarderAddress = automationForwarderAddress;
    }

    function mintAndUpdatePrice(
        address _to,
        uint256 _tokenId,
        string memory _tokenURI,
        uint64 _subscriptionId,
        uint32 _gasLimit
    ) external onlyIssuerOrItself {
        _mintDeCar(_to, _tokenId, _tokenURI);
        _updateCarPrice(_tokenId, _subscriptionId, _gasLimit);
    }

    function mint(address _to, uint256 _tokenId, string memory _tokenURI) external onlyIssuerOrItself {
        _mintDeCar(_to, _tokenId, _tokenURI);
    }

    function updatePrice(uint256 _tokenId, uint64 _subscriptionId, uint32 _gasLimit)
        external
        onlyAutomationForwarderOrOwner
    {
        _updateCarPrice(_tokenId, _subscriptionId, _gasLimit);
    }
}
