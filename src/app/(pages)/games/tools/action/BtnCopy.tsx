"use client";
import { IconCopy, IconCopyCheck } from "@tabler/icons-react";
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
    <div
      className={`relative min-w-[280px] rounded-md px-4 py-2 ${
        copy ? "border-2 border-green-500" : "border-2"
      }`}
    >
      <button onClick={handleCopy} className="h-full w-full text-start">
        {children}
      </button>
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center">
        <button
          aria-label="copy username"
          onClick={handleCopy}
          className={`${copy ? "text-green-500" : ""}`}
        >
          {copy ? <IconCopyCheck /> : <IconCopy />}
        </button>
      </div>
    </div>
  );
};

export default BtnCopy;
