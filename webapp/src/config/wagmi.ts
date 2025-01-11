import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { foundry } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Web3 Starter App",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!,
  chains: [foundry], // you can add new chians here by importing thorugh wagmi/chains
  transports: {
    // You can add new chain's RPC config
    [foundry.id]: http("http://127.0.0.1:8545"),
  },
  ssr: true, // If your dApp uses server side rendering (SSR)
});
