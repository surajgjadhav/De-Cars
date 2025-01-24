import { Address } from "viem";

export const dcTokenAddress = process.env
  .NEXT_PUBLIC_DC_TOKEN_ADDRESS as Address;
export const dcMarketplaceAddress = process.env
  .NEXT_PUBLIC_DC_MARKETPLACE_ADDRESS as Address;
export const usdcAddress = process.env.NEXT_PUBLIC_USDC_ADDRESS as Address;
