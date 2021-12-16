import "../styles/globals.css";
import { MetaMaskProvider } from "metamask-react";

function MyApp({ Component, pageProps }) {
  return (
    <MetaMaskProvider>
      <div className="mx-auto px-2 sm:px-16 lg:px-24 min-h-screen flex flex-col">
        <Component {...pageProps} />
      </div>
    </MetaMaskProvider>
  );
}

export default MyApp;
