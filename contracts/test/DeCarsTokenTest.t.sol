// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {DeCarsToken} from "../src/DeCarsToken.sol";
import {DeployDeCarsToken} from "../script/DeployDeCarsToken.s.sol";

contract DeCarsNFTTest is Test {
    DeCarsToken public deCarsToken;
    DeployDeCarsToken public deployer;
    address public ISSUER = makeAddr("issuer");
    address public USER = makeAddr("user");
    address public USER1 = makeAddr("user1");
    string public constant MOCK_NFT =
        "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.jso";

    function setUp() public {
        deployer = new DeployDeCarsToken();
        deCarsToken = deployer.run();
    }

    function test_CanDeCarsTokenMintAndHaveBalance() public {
        vm.prank(msg.sender);
        deCarsToken.setIssuer(ISSUER);

        vm.prank(ISSUER);
        deCarsToken.mint(USER, 0, MOCK_NFT);

        assert(deCarsToken.balanceOf(USER) == 1);
        assert(keccak256(abi.encodePacked(MOCK_NFT)) == keccak256(abi.encodePacked(deCarsToken.tokenURI(0))));
    }

    function test_RevertIfSetIssuerCallerIsNotOwner() public {
        vm.expectRevert();
        vm.prank(USER);
        deCarsToken.setIssuer(ISSUER);
    }

    function test_RevertIfMinterIsNotIssuer() public {
        vm.expectRevert(DeCarsToken.DeCarsToken__OnlyIssuerOrItselfIsAllowded.selector);
        vm.prank(USER);
        deCarsToken.mint(USER, 0, MOCK_NFT);
    }

    function test_RevertIfMintingAlreadyMintedNFT() public {
        vm.prank(msg.sender);
        deCarsToken.setIssuer(ISSUER);

        vm.startPrank(ISSUER);
        deCarsToken.mint(USER, 0, MOCK_NFT);
        vm.expectRevert();
        deCarsToken.mint(USER1, 0, MOCK_NFT);
        vm.stopPrank();

        assert(deCarsToken.balanceOf(USER) == 1);
        assert(keccak256(abi.encodePacked(MOCK_NFT)) == keccak256(abi.encodePacked(deCarsToken.tokenURI(0))));
    }
}
