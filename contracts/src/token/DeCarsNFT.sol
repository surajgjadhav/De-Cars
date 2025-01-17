// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721URIStorage, ERC721} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {OwnerIsCreator} from "@chainlink/contracts/src/v0.8/shared/access/OwnerIsCreator.sol";

contract DeCarsNFT is ERC721URIStorage, OwnerIsCreator {
    /**
     * Errors
     */
    error DeCarsNFT__OnlyIsuerOrOwnerIsAllowded();
    error DeCarsNFT__OnlyIssuerOrItselfIsAllowded();

    event SetIssuer(address indexed issuer);

    /**
     * Modifiers
     */
    modifier onlyIssuerOrItself() {
        if (msg.sender != address(this) && msg.sender != s_issuer) {
            revert DeCarsNFT__OnlyIssuerOrItselfIsAllowded();
        }
        _;
    }

    address internal s_issuer;

    constructor() ERC721("De Cars", "DC") {}

    function setIssuer(address _issuer) external onlyOwner {
        s_issuer = _issuer;

        emit SetIssuer(_issuer);
    }

    function mint(address to, uint256 tokenId, string memory tokenURI) public onlyIssuerOrItself returns (uint256) {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }
}
