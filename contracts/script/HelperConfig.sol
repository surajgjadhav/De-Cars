// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";

contract HelperConfig is Script {
    uint256 constant DEFAULT_ANVIL_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;

    struct NetworkConfig {
        address functionRouterAddress;
        bytes32 donId;
        address usdcUsdAggregator;
        address usdc;
        uint256 deployer;
    }

    NetworkConfig public activeNetworkConfig;

    constructor() {
        if (block.chainid == 80002) {
            activeNetworkConfig = getPolygonAmoyConfig();
        } else if (block.chainid == 11155420) {
            activeNetworkConfig = getOptimismConfig();
        } else {
            activeNetworkConfig = getOrCreateAnvilEthConfig();
        }
    }

    function getPolygonAmoyConfig() public view returns (NetworkConfig memory) {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        return NetworkConfig({
            functionRouterAddress: 0xC22a79eBA640940ABB6dF0f7982cc119578E11De,
            donId: 0x66756e2d706f6c79676f6e2d616d6f792d310000000000000000000000000000,
            usdcUsdAggregator: 0x1b8739bB4CdF0089d07097A9Ae5Bd274b29C6F16,
            usdc: 0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582,
            deployer: deployerPrivateKey
        });
    }

    function getOptimismConfig() public view returns (NetworkConfig memory) {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        return NetworkConfig({
            functionRouterAddress: 0xC17094E3A1348E5C7544D4fF8A36c28f2C6AAE28,
            donId: 0x66756e2d6f7074696d69736d2d7365706f6c69612d3100000000000000000000,
            usdcUsdAggregator: 0x6e44e50E3cc14DD16e01C590DC1d7020cb36eD4C,
            usdc: 0x5fd84259d66Cd46123540766Be93DFE6D43130D7,
            deployer: deployerPrivateKey
        });
    }

    function getOrCreateAnvilEthConfig() public pure returns (NetworkConfig memory) {
        return NetworkConfig({
            functionRouterAddress: address(0),
            donId: bytes32(0),
            usdcUsdAggregator: address(0),
            usdc: address(0),
            deployer: DEFAULT_ANVIL_KEY
        });
    }
}
