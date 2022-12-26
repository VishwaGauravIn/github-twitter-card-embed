import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex p-4 justify-between items-center">
      <div className="flex items-center font-bold text-3xl sm:text-4xl md:text-5xl gap-2 text-cyan-200">
        <img src="/logo.png" className="w-7 sm:w-8 md:w-12 brightness-200" />{" "}
        <span className="hidden sm:block">GTCE</span>
      </div>
      <div className="flex gap-4 md:gap-6">
        <Link href="https://www.buymeacoffee.com/vishwagauravin" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 bg-amber-200 text-amber-900 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold ring ring-amber-200/30 transition-all ease-in-out active:scale-95 shadow-lg hover:shadow-amber-200/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <span>Donate</span>
          </a>
        </Link>
        <Link
          href="https://github.com/VishwaGauravIn/github-twitter-card-embed"
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 bg-fuchsia-200 text-fuchsia-900 px-2 sm:px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold ring ring-fuchsia-200/30 transition-all ease-in-out active:scale-95 shadow-lg hover:shadow-fuchsia-200/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className=" w-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span className="hidden sm:block">GitHub</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
