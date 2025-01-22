import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DeCarsMarketplace
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deCarsMarketplaceAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'dcNFT_', internalType: 'address', type: 'address' },
      { name: '_usdcUsdAggregator', internalType: 'address', type: 'address' },
      { name: '_usdc', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getListedCars',
    outputs: [
      {
        name: '',
        internalType: 'struct DeCarsMarketplace.Details[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'listingStatus', internalType: 'bool', type: 'bool' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'tokenURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMyCars',
    outputs: [
      {
        name: '',
        internalType: 'struct DeCarsMarketplace.Details[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'listingStatus', internalType: 'bool', type: 'bool' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'tokenURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getValuationInUsdc',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenURI', internalType: 'string', type: 'string' },
      { name: '_subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: '_gasLimit', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'list',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'error', inputs: [], name: 'DeCarsMarketplace__InsufficientAmount' },
  { type: 'error', inputs: [], name: 'DeCarsMarketplace__TokenNotListed' },
  { type: 'error', inputs: [], name: 'DeCarsMarketplace__TransferFailed' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DeCarsToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deCarsTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'functionRouterAddress_',
        internalType: 'address',
        type: 'address',
      },
      { name: 'donId_', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCarPrice',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getPriceDetails',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'response', internalType: 'bytes', type: 'bytes' },
      { name: 'err', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'handleOracleFulfillment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenURI', internalType: 'string', type: 'string' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenURI', internalType: 'string', type: 'string' },
      { name: '_subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: '_gasLimit', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'mintAndUpdatePrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'automationForwarderAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'setAutomationForwarder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_issuer', internalType: 'address', type: 'address' }],
    name: 'setIssuer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: '_gasLimit', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'updatePrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'issuer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SetIssuer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [],
    name: 'DeCarsToken__OnlyAutomationForwarderOrOwnerCanCall',
  },
  {
    type: 'error',
    inputs: [],
    name: 'DeCarsToken__OnlyIssuerOrItselfIsAllowded',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  { type: 'error', inputs: [], name: 'EmptyArgs' },
  { type: 'error', inputs: [], name: 'EmptySource' },
  { type: 'error', inputs: [], name: 'NoInlineSecrets' },
  { type: 'error', inputs: [], name: 'OnlyRouterCanFulfill' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__
 */
export const useReadDeCarsMarketplace = /*#__PURE__*/ createUseReadContract({
  abi: deCarsMarketplaceAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"getListedCars"`
 */
export const useReadDeCarsMarketplaceGetListedCars =
  /*#__PURE__*/ createUseReadContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'getListedCars',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"getMyCars"`
 */
export const useReadDeCarsMarketplaceGetMyCars =
  /*#__PURE__*/ createUseReadContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'getMyCars',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"getValuationInUsdc"`
 */
export const useReadDeCarsMarketplaceGetValuationInUsdc =
  /*#__PURE__*/ createUseReadContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'getValuationInUsdc',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"owner"`
 */
export const useReadDeCarsMarketplaceOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__
 */
export const useWriteDeCarsMarketplace = /*#__PURE__*/ createUseWriteContract({
  abi: deCarsMarketplaceAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"buy"`
 */
export const useWriteDeCarsMarketplaceBuy =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'buy',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"list"`
 */
export const useWriteDeCarsMarketplaceList =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'list',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteDeCarsMarketplaceRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteDeCarsMarketplaceTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__
 */
export const useSimulateDeCarsMarketplace =
  /*#__PURE__*/ createUseSimulateContract({ abi: deCarsMarketplaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"buy"`
 */
export const useSimulateDeCarsMarketplaceBuy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'buy',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"list"`
 */
export const useSimulateDeCarsMarketplaceList =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'list',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateDeCarsMarketplaceRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateDeCarsMarketplaceTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsMarketplaceAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsMarketplaceAbi}__
 */
export const useWatchDeCarsMarketplaceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: deCarsMarketplaceAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsMarketplaceAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchDeCarsMarketplaceOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsMarketplaceAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__
 */
export const useReadDeCarsToken = /*#__PURE__*/ createUseReadContract({
  abi: deCarsTokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadDeCarsTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: deCarsTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadDeCarsTokenGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: deCarsTokenAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"getCarPrice"`
 */
export const useReadDeCarsTokenGetCarPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: deCarsTokenAbi,
    functionName: 'getCarPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"getPriceDetails"`
 */
export const useReadDeCarsTokenGetPriceDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: deCarsTokenAbi,
    functionName: 'getPriceDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadDeCarsTokenIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: deCarsTokenAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadDeCarsTokenName = /*#__PURE__*/ createUseReadContract({
  abi: deCarsTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"owner"`
 */
export const useReadDeCarsTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: deCarsTokenAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadDeCarsTokenOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: deCarsTokenAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadDeCarsTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: deCarsTokenAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadDeCarsTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: deCarsTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadDeCarsTokenTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: deCarsTokenAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__
 */
export const useWriteDeCarsToken = /*#__PURE__*/ createUseWriteContract({
  abi: deCarsTokenAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteDeCarsTokenAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteDeCarsTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: deCarsTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"handleOracleFulfillment"`
 */
export const useWriteDeCarsTokenHandleOracleFulfillment =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'handleOracleFulfillment',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteDeCarsTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: deCarsTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"mintAndUpdatePrice"`
 */
export const useWriteDeCarsTokenMintAndUpdatePrice =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'mintAndUpdatePrice',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteDeCarsTokenSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteDeCarsTokenSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"setAutomationForwarder"`
 */
export const useWriteDeCarsTokenSetAutomationForwarder =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'setAutomationForwarder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"setIssuer"`
 */
export const useWriteDeCarsTokenSetIssuer =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'setIssuer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteDeCarsTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteDeCarsTokenTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"updatePrice"`
 */
export const useWriteDeCarsTokenUpdatePrice =
  /*#__PURE__*/ createUseWriteContract({
    abi: deCarsTokenAbi,
    functionName: 'updatePrice',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__
 */
export const useSimulateDeCarsToken = /*#__PURE__*/ createUseSimulateContract({
  abi: deCarsTokenAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateDeCarsTokenAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateDeCarsTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"handleOracleFulfillment"`
 */
export const useSimulateDeCarsTokenHandleOracleFulfillment =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'handleOracleFulfillment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateDeCarsTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"mintAndUpdatePrice"`
 */
export const useSimulateDeCarsTokenMintAndUpdatePrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'mintAndUpdatePrice',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateDeCarsTokenSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateDeCarsTokenSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"setAutomationForwarder"`
 */
export const useSimulateDeCarsTokenSetAutomationForwarder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'setAutomationForwarder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"setIssuer"`
 */
export const useSimulateDeCarsTokenSetIssuer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'setIssuer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateDeCarsTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateDeCarsTokenTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deCarsTokenAbi}__ and `functionName` set to `"updatePrice"`
 */
export const useSimulateDeCarsTokenUpdatePrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deCarsTokenAbi,
    functionName: 'updatePrice',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__
 */
export const useWatchDeCarsTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: deCarsTokenAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchDeCarsTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchDeCarsTokenApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const useWatchDeCarsTokenBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"MetadataUpdate"`
 */
export const useWatchDeCarsTokenMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 */
export const useWatchDeCarsTokenOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchDeCarsTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"RequestFulfilled"`
 */
export const useWatchDeCarsTokenRequestFulfilledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'RequestFulfilled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"RequestSent"`
 */
export const useWatchDeCarsTokenRequestSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'RequestSent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"SetIssuer"`
 */
export const useWatchDeCarsTokenSetIssuerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'SetIssuer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link deCarsTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchDeCarsTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: deCarsTokenAbi,
    eventName: 'Transfer',
  })
