// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

contract HelperConfig {
    struct NetworkConfig {
        address functionRouterAddress;
        bytes32 donId;
        address usdcUsdAggregator;
        address usdc;
    }

    NetworkConfig public activeNetworkConfig;

    constructor() {
        if (block.chainid == 80002) {
            activeNetworkConfig = getPolygonAmoyConfig();
        } else {
            activeNetworkConfig = getOrCreateAnvilEthConfig();
        }
    }

    function getPolygonAmoyConfig() public pure returns (NetworkConfig memory) {
        return NetworkConfig({
            functionRouterAddress: 0xC22a79eBA640940ABB6dF0f7982cc119578E11De,
            donId: 0x66756e2d706f6c79676f6e2d616d6f792d310000000000000000000000000000,
            usdcUsdAggregator: 0x1b8739bB4CdF0089d07097A9Ae5Bd274b29C6F16,
            usdc: 0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582
        });
    }

    function getOrCreateAnvilEthConfig() public pure returns (NetworkConfig memory) {
        return NetworkConfig({
            functionRouterAddress: address(0),
            donId: bytes32(0),
            usdcUsdAggregator: address(0),
            usdc: address(0)
        });
    }
}
