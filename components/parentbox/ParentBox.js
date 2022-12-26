import React, { useState } from "react";

export default function ParentBox() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <span className="mt-28 text-cyan-200 font-semibold text-3xl">
        PREVIEW
      </span>
      <div
        className={`flex p-8 ring mt-10 rounded ring-cyan-200 ${
          darkMode ? `bg-[#010409]` : `bg-white`
        } `}
      >
        <img src="/api/test" alt="" className="" />
        <button className=""></button>
      </div>
    </div>
  );
}
