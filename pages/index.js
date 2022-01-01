import NavBar from "../components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="container pt-10 pb-10 md:pt-16 mx-auto">
        <div className="flex flex-col w-full xl:w-3/5 items-start overflow-y-hidden mx-auto">
          <h1 className="mb-8 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-centeru">
            Buy our NFTs and get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-scolor px-2 py-0 border-double border-b-4 border-pcolor">
              full life time access
            </span>{" "}
            to our products
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
                step 3: Once at the OpenBiSea Collection page connect your
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
          <Imgs />
          <div className="flex items-center justify-between pt-4 w-full">
            <a
              className="bg-white mx-auto text-scolor text-lg font-bold py-3 px-6 rounded-xl focus:ring"
              href="https://app.openbisea.com/"
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

function Imgs() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-center">
        <Image width="320" height="140" src="/static/nfts/DF1.png" alt="" />
        <Image width="320" height="140" src="/static/nfts/DF2.png" alt="" />
        <Image width="320" height="140" src="/static/nfts/DF3.png" alt="" />
        <Image width="320" height="140" src="/static/nfts/DF4.png" alt="" />
        <Image width="320" height="140" src="/static/nfts/DF5.png" alt="" />
      </div>
      <span className="text-center py-3 px-3 my-3 mx-auto font-extrabold text-xl text-tcolor rounded-xl border-2 border-scolor">
        Only 1,000 lifetime memberships available
      </span>
    </div>
  );
}
