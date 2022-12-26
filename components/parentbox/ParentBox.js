import React, { useRef, useState } from "react";
import { AtSymbolIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import themes from "../../themes/themes";
import { icons } from "../../icons";
import { toast, ToastContainer } from "react-toastify";

export default function ParentBox() {
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState("dracula");
  const [response, setResponse] = useState(true);
  const [border, setBorder] = useState(true);
  const [time, setTime] = useState(true);
  const [icon, setIcon] = useState("default");
  const username = useRef("");
  function onCopy() {
    // TODO: add validation to check if the username is valid or not?
    navigator.clipboard
      .writeText(
        `[![](https://gtce.itsvg.in/api?username=${username.current?.value}&theme=${theme}&response=${response}&border=${border}&time=${time}&icon=${icon})](https://gtce.itsvg.in/)`
      )
      .then(() => {
        toast.success("Copied Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }
  return (
    <div className="flex flex-col items-center">
      <span className="mt-10 sm:mt-28 text-cyan-200 font-semibold text-3xl">
        PREVIEW
      </span>
      <div
        className={`flex relative ring mt-10 rounded ring-cyan-200 mx-2 transition-all ease-in-out ${
          darkMode ? `bg-[#010409]` : `bg-white`
        } `}
      >
        <img
          src={`/api/test?theme=${theme}&response=${response}&border=${border}&time=${time}&icon=${icon}`}
          alt=""
          className="p-4 sm:p-8"
        />
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
        <div className="flex bg-cyan-200 text-cyan-900 p-2 gap-2 rounded focus-within:ring ring-cyan-200/20 focus-within:bg-[#72f1ff]">
          <AtSymbolIcon className="w-6" />
          <input
            type="text"
            name=""
            id=""
            ref={username}
            required
            placeholder="Twitter Username"
            className="bg-transparent outline-none placeholder-cyan-900/80"
          />
        </div>
        <button
          type="submit"
          className="bg-green-200 text-green-900 px-6 py-3 font-semibold flex gap-2 rounded-full ring ring-green-200/30 active:scale-95 transition-all ease-in-out"
          onClick={onCopy}
        >
          <CodeBracketIcon className="w-6 stroke-2" /> Copy Code
        </button>
      </form>
      <div className="my-10 text-white">
        <p className="text-cyan-200 font-semibold text-3xl mb-6">
          Customisations
        </p>
        <div className="flex gap-2 items-center">
          Theme:
          <select
            name=""
            id=""
            className="bg-cyan-200 text-cyan-900 p-2 rounded font-semibold outline-none focus-within:ring ring-cyan-200/30"
            onChange={(e) => setTheme(e.currentTarget.value)}
          >
            {Object.keys(themes).map((theme) => (
              <option key={theme} value={theme}>
                {theme.replaceAll("_", " ").replaceAll("-", " ")}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center mt-6">
          Icon:
          <select
            name=""
            id=""
            className="bg-cyan-200 text-cyan-900 p-2 rounded font-semibold outline-none focus-within:ring ring-cyan-200/30 w-full"
            onChange={(e) => setIcon(e.currentTarget.value)}
          >
            {Object.keys(icons).map((icon) => (
              <option key={icon} value={icon}>
                {icon.replaceAll("_", " ").replaceAll("-", " ")}
              </option>
            ))}
          </select>
        </div>
        <span className="flex justify-center items-center gap-2 mt-6">
          Response:{" "}
          <input
            type="checkbox"
            name=""
            id=""
            checked={response}
            className="w-4 h-4 accent-cyan-200"
            onChange={() => setResponse(!response)}
          />
        </span>
        <span className="flex justify-center items-center gap-2 mt-2">
          Time:{" "}
          <input
            type="checkbox"
            name=""
            id=""
            checked={time}
            className="w-4 h-4 accent-cyan-200"
            onChange={() => setTime(!time)}
          />
        </span>
        <span className="flex justify-center items-center gap-2 mt-2">
          Border:{" "}
          <input
            type="checkbox"
            name=""
            id=""
            checked={border}
            className="w-4 h-4 accent-cyan-200"
            onChange={() => setBorder(!border)}
          />
        </span>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
