// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DeCarsNFT} from "./token/DeCarsNFT.sol";
import {CarPriceDetails} from "./chainlink/CarPriceDetails.sol";

contract DeCarsToken is CarPriceDetails, DeCarsNFT {
    constructor(address functionRouterAddress_, bytes32 donId_)
        CarPriceDetails(functionRouterAddress_, donId_)
        DeCarsNFT()
    {}
}
