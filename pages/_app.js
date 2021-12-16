import "../styles/globals.css";
import Head from "next/head";
import { MetaMaskProvider } from "metamask-react";

function MyApp({ Component, pageProps }) {
  return (
    <MetaMaskProvider>
      <Head>
        <title>DominateForex NFT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mx-auto px-2 sm:px-16 lg:px-24 min-h-screen flex flex-col">
        <Component {...pageProps} />
      </div>
    </MetaMaskProvider>
  );
}

export default MyApp;
