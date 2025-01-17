// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

/**
 * @title OracleLib
 * @author Suraj
 * @notice Library to check Chainlink Oracle for Stale Data.
 * If price is stale, function will revert and render the DESCEngine unusable - this is by design
 * We want DSCEngine to Freeze if PriceFeed becomes stale
 *
 * So if the Chainlink network explodes and you have lot of money locket in protocol
 */
library OracleLib {
    error OracleLib__StalePrice();
    error OracleLib__PriceFeedDdosed();
    error OracleLib__InvalidRoundId();

    uint256 private constant TIMEOUT = 3 hours; // 3 * 60 * 60

    function checkLatestRoundData(AggregatorV3Interface priceFeed)
        public
        view
        returns (uint80, uint256, uint256, uint256, uint80)
    {
        uint80 _roundId;
        uint256 _price;
        uint256 _startedAt;
        uint256 _updatedAt;
        uint80 _answeredInRound;
        try priceFeed.latestRoundData() returns (
            uint80 roundId, int256 price, uint256 _startedAt, uint256 updatedAt, uint80 _answeredInRound
        ) {
            _roundId = roundId;
            _price = uint256(price);
            _updatedAt = updatedAt;
        } catch {
            revert OracleLib__PriceFeedDdosed();
        }

        if (_roundId == 0) revert OracleLib__InvalidRoundId();

        if (_updatedAt < block.timestamp - TIMEOUT) {
            revert OracleLib__StalePrice();
        }
        return (_roundId, _price, _startedAt, _updatedAt, _answeredInRound);
    }
}
