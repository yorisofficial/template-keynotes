"use client";
import Button from "@/app/components/Button";
import { IconCopy, IconCopyCheck } from "@tabler/icons-react";
import React, { useState } from "react";

const Page = () => {
  const [random, setRandom] = useState("");
  const [range, setRange] = useState(8);
  const [show, setShow] = useState(false);
  const handleRandom = () => {
    const characters = "0123456789";
    const generateRandomPassword = (length: number) => {
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        );
      }
      return result;
    };

    setRandom(generateRandomPassword(range));
  };
  const handleClick = () => {
    navigator.clipboard.writeText(random);
    setShow(!show);
    setTimeout(() => {
      setShow(false);
      setRandom("");
    }, 2000);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center px-[5%] xl:px-24">
      <div className="flex flex-col">
        <div className="header my-4 flex flex-col items-center justify-center">
          <h1 className="font-serif text-3xl font-bold">Random Password</h1>
          <p className="w-full text-center xl:w-1/2">
            This is generator random password where the first, you need to
            select how many range the password you want to used, and then click
            the button Generator bellow to generate new password and to copy you
            can click the copy button thats automatically copy the password to
            your clipboard. <br />
            <span className="text-red-500">
              Make sure you save the password in your note!
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 xl:flex-row">
          <div className="flex w-fit items-center justify-center">
            <select
              name=""
              id=""
              onChange={(e) => setRange(Number(e.target.value))}
              className="w-full rounded-md border-2 border-black p-2"
            >
              <option value={8}>8</option>
              <option value={10}>10</option>
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
          </div>
          <div className="relative h-10 w-fit min-w-[300px] rounded-md ">
            <input
              value={random}
              className="h-full w-full rounded-md border-2 border-black py-2 pl-2 text-start"
            />
            <button
              onClick={handleClick}
              className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center"
            >
              {!show ? <IconCopy /> : <IconCopyCheck />}
            </button>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center">
          <Button
            ariaLabel="generate password"
            onClick={handleRandom}
            className="rounded-md bg-black px-6 py-2 text-white"
          >
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
