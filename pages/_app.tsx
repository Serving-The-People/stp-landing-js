import "../styles/globals.css";

import { providers } from "ethers";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { AppProps } from "next/app";

const { provider, webSocketProvider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ apiKey: process.env.NODE_ALCHEMY_KEY, priority: 0 }),
    publicProvider({ priority: 1 }),
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new MetaMaskConnector(),
    new WalletConnectConnector({
      options: {
        infuraId: process.env.NODE_ALCHEMY_KEY,
        qrcode: true,
        rpc: {
          1: `https://eth-mainnet.alchemyapi.io/v2/9ANCgz1Z3X9HqDQLxVtzabn04IYiK1v-`,
        },
      },
    }),
    new CoinbaseWalletConnector({
      options: {
        appName: "stp-home",
        jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.NODE_ALCHEMY_KEY}`,
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
