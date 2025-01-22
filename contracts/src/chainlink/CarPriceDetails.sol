// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {OwnerIsCreator} from "@chainlink/contracts/src/v0.8/shared/access/OwnerIsCreator.sol";
import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";
import {FunctionSource} from "./FunctionSource.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract CarPriceDetails is FunctionsClient, FunctionSource {
    using FunctionsRequest for FunctionsRequest.Request;

    bytes32 internal immutable i_donId;

    mapping(uint256 tokenId => uint256 price) internal s_tokenToPrice;

    constructor(address functionRouterAddress_, bytes32 donId_) FunctionsClient(functionRouterAddress_) {
        i_donId = donId_;
    }

    function _updateCarPrice(uint256 tokenId, uint64 subscriptionId, uint32 gasLimit)
        internal
        returns (bytes32 requestId)
    {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(this.getCarPrice());
        string[] memory args = new string[](1);
        args[0] = Strings.toString(tokenId);
        req.setArgs(args);

        requestId = _sendRequest(req.encodeCBOR(), subscriptionId, gasLimit, i_donId);
    }

    function fulfillRequest(bytes32, /* requestId */ bytes memory response, bytes memory err) internal override {
        if (err.length != 0) {
            revert(string(err));
        }

        (uint256 tokenId, uint256 price) = abi.decode(response, (uint256, uint256));

        s_tokenToPrice[tokenId] = price;
    }

    function getPriceDetails(uint256 tokenId) external view returns (uint256) {
        return s_tokenToPrice[tokenId];
    }
}
