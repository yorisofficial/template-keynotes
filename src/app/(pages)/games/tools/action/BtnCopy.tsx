"use client";
import { IconCopy, IconCopyCheck, IconUser } from "@tabler/icons-react";
import React, { useState } from "react";

const BtnCopy = ({ children }: { children: React.ReactNode }) => {
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(children as string);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  return (
    <div className={`relative min-w-[280px] rounded-md border-2 py-2 pl-14`}>
      <div className="absolute left-0 top-1/2 flex h-full w-10 -translate-y-1/2 items-center justify-center bg-black text-white dark:bg-white dark:text-black">
        <IconUser />
      </div>
      <button onClick={handleCopy} className={`h-full w-full text-start`}>
        {children}
      </button>
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center">
        <button
          aria-label="copy username"
          onClick={handleCopy}
          className={`duration-500 ${copy ? "scale-150 text-green-500" : ""}`}
        >
          {copy ? <IconCopyCheck /> : <IconCopy />}
        </button>
      </div>
    </div>
  );
};

export default BtnCopy;
