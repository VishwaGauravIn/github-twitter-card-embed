import React, { useState } from "react";
import { AtSymbolIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 flex flex-col items-center gap-6"
      >
        <div className="flex bg-blue-200 text-blue-900 p-2 gap-2 rounded">
          <AtSymbolIcon className="w-6" />
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Twitter Username"
            className="bg-transparent outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-green-200 text-green-900 px-6 py-3 font-semibold flex gap-2 rounded-full ring ring-green-200/30 active:scale-95 transition-all ease-in-out"
        >
          <CodeBracketIcon className="w-6 stroke-2" /> Copy Code
        </button>
      </form>
    </div>
  );
}
