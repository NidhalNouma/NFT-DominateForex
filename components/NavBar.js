import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="">
      <div className="relative flex items-center justify-between h-16">
        <Link href="/" passHref={true}>
          <h1 className="lg:text-3xl text-xl font-extrabold cursor-pointer">
            dominateforex
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-pcolor">
              NFT
            </span>
          </h1>
        </Link>
        <Link href="/member" passHref={true}>
          <span className="text-white text-xl font-extrabold cursor-pointer">
            Member
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
