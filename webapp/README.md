# De-Cars App: Frontend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It contains frontend for the De-Cars App to interact with De-Cars Marketplace Contract deployed on chain.

## Getting Started

Install all dependencies:

```bash
yarn install
```

Set environment variables by copying `.env.example` to `.env` and filling in the values:

- _NEXT_PUBLIC_WALLET_CONNECT_ID_ for the wallet connector. You can get one from [WalletConnect](https://walletconnect.org/) by going to [WalletConnect Cloud](https://cloud.walletconnect.com/sign-in).
- _NEXT_PUBLIC_DC_TOKEN_ADDRESS_ for the deployed De-Cars Token contract address.
- _NEXT_PUBLIC_DC_MARKETPLACE_ADDRESS_ for the deployed De-Cars Marketplace contract address
- _NEXT_PUBLIC_USDC_ADDRESS_ for USDC contract address of respective chain
- _NEXT_PINATA_JWT_ for Pinata JWT token
- _NEXT_PINATA_GATEWAY_URL_ for Pinata Gateway URL
- _NEXT_PINATA_GROUP_ID_ for Pinata Group ID

run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [RainbowKit](https://www.rainbowkit.com/)
- [wagmi](https://wagmi.sh/) & [viem](https://viem.sh/)
- [Material UI](https://mui.com/material-ui/)
