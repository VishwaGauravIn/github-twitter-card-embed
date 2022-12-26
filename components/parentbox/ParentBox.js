import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ParentBox() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <span className="mt-28 text-cyan-200 font-semibold text-3xl">
        PREVIEW
      </span>
      <div
        className={`flex relative ring mt-10 rounded ring-cyan-200 transition-all ease-in-out ${
          darkMode ? `bg-[#010409]` : `bg-white`
        } `}
      >
        <img src="/api/test" alt="" className="p-8" />
        <button
          className="bg-cyan-200 absolute right-0 -top-8 p-1 flex text-xs items-center gap-1 pl-2 pr-1 rounded-t font-semibold group"
          onClick={() => setDarkMode(!darkMode)}
        >
          Theme
          {darkMode ? (
            <SunIcon className="w-6 group-active:scale-75 transition-all ease-in-out" />
          ) : (
            <MoonIcon className="w-6 group-active:scale-75 transition-all ease-in-out" />
          )}
        </button>
      </div>
    </div>
  );
}
