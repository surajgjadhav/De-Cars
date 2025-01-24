// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {HelperConfig} from "./HelperConfig.sol";
import {DeCarsToken} from "../src/DeCarsToken.sol";
import {DeCarsMarketplace} from "../src/DeCarsMarketplace.sol";
import {Script} from "forge-std/Script.sol";

contract DeployDeCarsMarketplace is Script {
    constructor() {}

    function run() public {
        HelperConfig config = new HelperConfig();
        (address functionRouterAddress, bytes32 donId, address usdcUsdAggregator, address usdc, uint256 deployer) =
            config.activeNetworkConfig();

        vm.startBroadcast(deployer);
        DeCarsToken token = new DeCarsToken(functionRouterAddress, donId);
        DeCarsMarketplace marketplace = new DeCarsMarketplace(address(token), usdcUsdAggregator, usdc);
        token.setIssuer(address(marketplace));
        vm.stopBroadcast();
    }
}
