import { defineConfig } from "@wagmi/cli";
import { react, foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    foundry({
      project: "../contracts",
      artifacts: "../contracts/out",
      include: ["DeCarsToken.sol/**", "DeCarsMarketplace.sol/**"],
    }),
    react(),
  ],
});
