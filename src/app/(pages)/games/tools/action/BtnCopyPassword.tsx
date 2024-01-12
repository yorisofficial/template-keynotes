"use client";
import {
  IconCopy,
  IconCopyCheck,
  IconEye,
  IconEyeOff,
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
    <div
      className={`relative min-w-[280px] rounded-md px-4 py-2 ${
        copy ? "border-2 border-green-500" : "border-2"
      }`}
    >
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
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center space-x-2">
        <button
          aria-label="show password"
          onClick={() => setEye(!eye)}
          className={`${!eye ? "text-green-500" : ""}`}
        >
          {!eye ? <IconEye /> : <IconEyeOff />}
        </button>
        <button
          aria-label="copy password"
          onClick={handleCopy}
          className={`${copy ? "text-green-500" : ""}`}
        >
          {copy ? <IconCopyCheck /> : <IconCopy />}
        </button>
      </div>
    </div>
  );
};

export default BtnCopyPassword;
