import React, { useEffect, useRef, useState } from "react";
import { AtSymbolIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import themes from "../../themes/themes";
import { icons } from "../../icons";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { Card } from "../Card";

export default function ParentBox() {
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState("dracula");
  const [response, setResponse] = useState(true);
  const [border, setBorder] = useState(true);
  const [time, setTime] = useState(true);
  const [icon, setIcon] = useState("default");
  const username = useRef("");
  function onCopy(e) {
    e.preventDefault();
    // TODO: add validation to check if the username is valid or not?
    navigator.clipboard
      .writeText(
        `<a href="https://github.com/VishwaGauravIn/github-twitter-card-embed"><img src="https://gtce.itsvg.in/api?username=${username.current.value}&theme=${theme}&response=${response}&border=${border}&time=${time}&icon=${icon}"/></a>`
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
        setTimeout(() => {
          toast.info(
            "Now you can Paste it inside your GitHub ReadMe or any Website.",
            {
              position: "top-center",
              autoClose: 7000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }, 1000);
      });
  }
  const [url, setUrl] = useState(
    "/api/test?theme=dracula&response=true&border=true&time=true&icon=default"
  );
  const date = new Date();
  //   Removed API dependency. why? to save function run and faster output
  useEffect(() => {
    let svg = Card(
      "VishwaGauravIn",
      "Vishwa Gaurav",
      "The Best Realtime Tweet embed with 60+ awesome themes. Get a Verified badge, Showcase your Tweet on Website, GitHub ReadMe or anywhere else, Download your tweets as image.",
      date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
      }),
      date.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      500000,
      125100,
      375896,
      `${theme}`,
      `${response}`,
      `${border}`,
      `${time}`,
      `${icon}`
    );
    // Parsing SVG from String
    let blob = new Blob([svg], { type: "image/svg+xml" });
    setUrl(URL.createObjectURL(blob));
  }, [time, response, border, theme, icon]);
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
        <img src={url} alt="" className="p-4 sm:p-8" />
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
        onSubmit={(e) => {
          onCopy(e);
        }}
        className="mt-10 flex flex-col items-center gap-6"
      >
        <div className="flex bg-cyan-200 text-cyan-900 p-2 gap-2 rounded focus-within:ring ring-cyan-200/20 focus-within:bg-[#72f1ff] mx-2">
          <AtSymbolIcon className="w-8" />
          <input
            type="text"
            name=""
            id=""
            ref={username}
            required
            placeholder="Twitter Username"
            className="bg-transparent outline-none placeholder-cyan-900/80 text-xl font-medium"
          />
        </div>
        <button
          type="submit"
          title="Copy the code that can be pasted inside ReadMe.md file of your GitHub"
          className="bg-green-200 text-green-900 px-6 py-3 font-semibold flex gap-2 rounded-full ring ring-green-200/30 active:scale-95 transition-all ease-in-out"
        >
          <CodeBracketIcon className="w-6 stroke-2" /> Copy Code
        </button>
      </form>
      <div className="mt-10 text-white flex flex-col items-center">
        <p className="text-cyan-200 font-semibold text-3xl mb-6">
          Customisations
        </p>
        <div className="flex gap-2 items-center">
          Theme:
          <select
            name=""
            id=""
            defaultValue={theme}
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
            defaultValue={icon}
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
          Like/Retweet/Comment:{" "}
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
        {/* TODO: add ProductHunt Link */}
        <Link href="https://www.buymeacoffee.com/vishwagauravin" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10"
            title="Vote Now on ProductHunt!"
          >
            <img
              src="/ProductHunt.svg"
              alt=""
              className="self-center ring-2 ring-[#FF6154] pointer-events-none rounded-md"
              draggable="false"
            />
          </a>
        </Link>
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
