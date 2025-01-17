// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {DeCarsNFT} from "../src/token/DeCarsNFT.sol";

contract DeployDeCarsNFT is Script {
    function setUp() public {}

    function run() public returns (DeCarsNFT) {
        vm.startBroadcast();

        DeCarsNFT deCarsNFT = new DeCarsNFT();

        vm.stopBroadcast();

        return deCarsNFT;
    }
}
