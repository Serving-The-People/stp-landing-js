import "../styles/globals.css";

import { providers } from "ethers";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { AppProps } from "next/app";

const alchemyKey = process.env.NODE_ALCHEMY_KEY;

const { provider, webSocketProvider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ apiKey: alchemyKey, priority: 0 }),
    publicProvider({ priority: 1 }),
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new InjectedConnector({ options: { name: "MetaMask" } }),
    new WalletConnectConnector({
      options: {
        qrcode: true,
        rpc: {
          1: `https://eth-mainnet.alchemyapi.io/v2/${alchemyKey}`,
        },
      },
    }),
    new CoinbaseWalletConnector({
      options: {
        appName: "stp-docs",
        jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${alchemyKey}`,
      },
    }),
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;
