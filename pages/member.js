import React from "react";
import NavBar from "../components/NavBar";
import { useMetaMask } from "metamask-react";

function Member() {
  const { status, connect, account } = useMetaMask();

  return (
    <>
      <NavBar />
      {status === "notConnected" ? (
        <BtnConnect connect={connect} />
      ) : (
        <Account account={account} />
      )}
    </>
  );
}

export default Member;

function BtnConnect({ connect }) {
  return (
    <div className="mx-auto my-auto">
      <button
        onClick={connect}
        className="bg-white text-scolor text-lg font-bold py-3 px-6 rounded-xl focus:ring"
      >
        Connect your wallet
      </button>
    </div>
  );
}

function Account({ account, show = false }) {
  return (
    <div className="mx-auto mt-10">
      <div>
        <h1 className="font-extrabold ">
          Address
          <span className="text-tcolor bg-slate-50 ml-2 px-2 py-1 rounded">
            {account}
          </span>
        </h1>
      </div>
      {show ? <Body /> : <NoBody />}
    </div>
  );
}

function NoBody() {
  return (
    <div className="mx-auto mt-10 text-center">
      <div className="my-10">
        <a
          href="https://opensea.io/collection/dominateforex"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-scolor text-base font-bold py-1 px-2 rounded focus:ring"
        >
          Click here to Buy our NFTs
        </a>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="mx-auto mt-10 text-center">
      <div className="my-10">
        <label className="">Tradingview UserName:</label>
        <input
          type="text"
          placeholder="User Name"
          className="text-icolor mx-2 rounded ml px-2 py-1"
        />
        <button
          // onClick={{}}
          className="bg-white text-scolor text-base font-bold py-1 px-2 rounded focus:ring"
        >
          Save
        </button>
      </div>
      <div>
        <button
          // onClick={{}}
          className="bg-white text-scolor text-base font-bold py-1 px-2 rounded focus:ring"
        >
          Click here to Download our MT4 products
        </button>
      </div>
    </div>
  );
}
