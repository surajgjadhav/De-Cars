import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { polygonAmoy } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "De-Cars App",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!,
  chains: [polygonAmoy], // you can add new chians here by importing thorugh wagmi/chains
  transports: {
    // You can add new chain's RPC config
    [polygonAmoy.id]: http("https://rpc-amoy.polygon.technology/"),
  },
  ssr: true, // If your dApp uses server side rendering (SSR)
});
