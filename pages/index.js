import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="container pt-24 md:pt-36 mx-auto">
        <div className="flex flex-col w-full xl:w-3/5 items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-left">
            Buy our NFTs and get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-tcolor px-2 py-0 border-double border-b-4 border-pcolor">
              full life time access
            </span>{" "}
            to our prodducts
          </h1>
          <p className="leading-normal text-base md:text-lg mb-8 text-left">
            By purchasing this NFT Utility you’ll gain lifetime access to all
            exclusive tools available from DominateForex LLC. The tools are
            defined as Tradingview Indicators, Tradingview Strategies, MT4
            Indicators, MT4 Expert Advisors, MT5 Indicators, MT5 Expert
            Advisors, ThinkorSwim Indicators
          </p>

          <p className="leading-normal text-base md:text-lg mb-8 text-left">
            <ul>
              <li>Step 1: Connect your MetaMask Wallet</li>
              <li>Step 2: Click the Buy NFT Button</li>
              <li>
                step 3: Once at the OpenSea Collection page connect your
                MetaMask wallet
              </li>
              <li>
                Step 4: Purchase your NFT Utility for Lifetime membership access
              </li>
              <li>
                Step 5: Follow the steps in the Utility to gain full access
              </li>
            </ul>
          </p>

          <div className="flex items-center justify-between pt-4">
            <a
              className="bg-white text-scolor text-lg font-bold py-3 px-6 rounded-xl focus:ring"
              href="https://opensea.io/collection/dominateforex"
              target="_blank"
              rel="noreferrer"
            >
              Click here to buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
