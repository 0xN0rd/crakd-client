import { OverlayProvider } from 'react-aria';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import {
  connectorsForWallets,
  wallet,
  RainbowKitProvider,
  midnightTheme,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultProvider } from 'ethers';

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.goerli,
    chain.optimism,
    chain.optimismKovan,
    chain.polygon,
    chain.polygonMumbai,
    chain.arbitrum,
  ],
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/eth",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/eth_goerli",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/optimism",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/optimism_testnet",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/polygon_mumbai",
        };
      },
    }),
    publicProvider(),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/arbitrum",
        };
      },
    }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      wallet.metaMask({ chains, shimDisconnect: true }),
      wallet.walletConnect({ chains }),
      wallet.coinbase({ appName: "Vite React RainbowKit Starter App", chains }),
      wallet.rainbow({ chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      wallet.argent({ chains }),
      wallet.brave({
        chains,
        shimDisconnect: true,
      }),
      wallet.imToken({ chains }),
      wallet.injected({
        chains,
        shimDisconnect: true,
      }),
      wallet.ledger({
        chains,
        // infuraId: null,
      }),
      wallet.steak({ chains }),
      wallet.trust({ chains, shimDisconnect: true }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider: getDefaultProvider(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    <OverlayProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={midnightTheme()} coolMode>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </OverlayProvider>
  );
}
