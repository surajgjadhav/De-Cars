import { Address } from "viem";

export const contractAddress = process.env
  .NEXT_PUBLIC_CONTRACT_ADDRESS as Address;
