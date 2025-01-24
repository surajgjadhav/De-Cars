// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

contract FunctionSource {
    string public constant getCarPrice = "const { ethers } = await import('npm:ethers@6.10.0');"
        "const abiCoder = ethers.AbiCoder.defaultAbiCoder();" "const carId = parseInt(args[0]);"
        "const apiResponse = await Functions.makeHttpRequest({url: `https://freetestapi.com/api/v1/cars/${carId}`});"
        "const price = Number(apiResponse.data.price);"
        "const encoded = abiCoder.encode([`uint256`, `uint256`], [carId, Math.round(price)]);"
        "return ethers.getBytes(encoded);";
}
