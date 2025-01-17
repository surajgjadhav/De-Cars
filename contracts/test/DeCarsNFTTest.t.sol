// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {DeCarsNFT} from "../src/token/DeCarsNFT.sol";
import {DeployDeCarsNFT} from "../script/DeployDeCarsNFT.s.sol";

contract DeCarsNFTTest is Test {
    DeCarsNFT public deCarsNFT;
    DeployDeCarsNFT public deployer;
    address public ISSUER = makeAddr("issuer");
    address public USER = makeAddr("user");
    address public USER1 = makeAddr("user1");
    string public constant MOCK_NFT =
        "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.jso";

    function setUp() public {
        deployer = new DeployDeCarsNFT();
        deCarsNFT = deployer.run();
    }

    function test_CanDeCarsNFTMintAndHaveBalance() public {
        vm.prank(msg.sender);
        deCarsNFT.setIssuer(ISSUER);

        vm.prank(ISSUER);
        deCarsNFT.mint(USER, 0, MOCK_NFT);

        assert(deCarsNFT.balanceOf(USER) == 1);
        assert(keccak256(abi.encodePacked(MOCK_NFT)) == keccak256(abi.encodePacked(deCarsNFT.tokenURI(0))));
    }

    function test_RevertIfSetIssuerCallerIsNotOwner() public {
        vm.expectRevert();
        vm.prank(USER);
        deCarsNFT.setIssuer(ISSUER);
    }

    function test_RevertIfMinterIsNotIssuer() public {
        vm.expectRevert(DeCarsNFT.DeCarsNFT__OnlyIssuerOrItselfIsAllowded.selector);
        vm.prank(USER);
        deCarsNFT.mint(USER, 0, MOCK_NFT);
    }

    function test_RevertIfMintingAlreadyMintedNFT() public {
        vm.prank(msg.sender);
        deCarsNFT.setIssuer(ISSUER);

        vm.startPrank(ISSUER);
        deCarsNFT.mint(USER, 0, MOCK_NFT);
        vm.expectRevert();
        deCarsNFT.mint(USER1, 0, MOCK_NFT);
        vm.stopPrank();

        assert(deCarsNFT.balanceOf(USER) == 1);
        assert(keccak256(abi.encodePacked(MOCK_NFT)) == keccak256(abi.encodePacked(deCarsNFT.tokenURI(0))));
    }
}
