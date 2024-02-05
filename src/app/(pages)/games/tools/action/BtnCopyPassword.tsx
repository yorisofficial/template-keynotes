"use client";
import {
  IconCopy,
  IconCopyCheck,
  IconEye,
  IconEyeOff,
  IconLock,
} from "@tabler/icons-react";
import React, { useState } from "react";

const BtnCopyPassword = ({ children }: { children: React.ReactNode }) => {
  const [copy, setCopy] = useState(false);
  const [eye, setEye] = useState(true);
  const handleCopy = () => {
    navigator.clipboard.writeText(children as string);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  return (
    <div className={`relative min-w-[280px] rounded-md border-2 py-2 pl-14`}>
      <div className="absolute left-0 top-1/2 flex h-full w-10 -translate-y-1/2 items-center justify-center rounded-l-md border border-black bg-black text-white dark:bg-white dark:text-black">
        <IconLock />
      </div>
      <button
        aria-label="copy user password"
        onClick={handleCopy}
        className={`h-full w-full text-start `}
      >
        {!eye
          ? children
          : typeof children === "string"
            ? "*".repeat(children.length)
            : null}
      </button>
      <div className="absolute right-0 top-1/2 flex h-full -translate-y-1/2 items-center justify-center space-x-2 bg-transparent">
        <button
          aria-label="show password"
          onClick={() => setEye(!eye)}
          className={`${!eye ? "text-red-500" : ""}`}
        >
          {!eye ? <IconEye /> : <IconEyeOff />}
        </button>
        <div className="flex h-full w-10 items-center justify-center rounded-r-md bg-black text-white dark:bg-white dark:text-black">
          <button
            aria-label="copy password"
            onClick={handleCopy}
            className={`duration-500 ${copy ? "scale-150 text-green-500" : ""}`}
          >
            {copy ? <IconCopyCheck /> : <IconCopy />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BtnCopyPassword;
