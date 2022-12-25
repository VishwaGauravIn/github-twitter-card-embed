import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex p-4 justify-between items-center">
      <div className="flex items-center font-bold text-5xl gap-2 text-[#53ADEE]">
        <Image src="/logo.png" height="48px" width="48px" /> GTCE
      </div>
      <div className="flex gap-6">
        <Link href="https://www.buymeacoffee.com/vishwagauravin" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#53ADEE] px-6 py-3 rounded-full font-semibold ring transition-all ease-in-out active:scale-95 shadow-lg hover:shadow-[#53adee85]"
          >
            Donate
          </a>
        </Link>
        <Link
          href="https://github.com/VishwaGauravIn/github-twitter-card-embed"
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#53ADEE] px-6 py-3 rounded-full font-semibold ring transition-all ease-in-out active:scale-95 shadow-lg hover:shadow-[#53adee85]"
          >
            GitHub
          </a>
        </Link>
      </div>
    </div>
  );
}
