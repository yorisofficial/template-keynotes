"use client";
import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ThemeButton from "./themes/ThemeButton";
import Button from "./Button";

const menus = [
  { title: "home", url: "/" },
  { title: "games", url: "/games" },
  { title: "tool", url: "/password" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isWindowScrolled = window.scrollY > 0;
      setIsScrolled(isWindowScrolled);
      localStorage.setItem("isScrolled", JSON.stringify(isWindowScrolled));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={navbarRef}
      className={`sticky left-0 top-0 z-40 flex h-fit w-full justify-between px-4 py-4 transition-colors duration-700 ease-in-out xl:px-20 ${
        isScrolled
          ? "bg-white/80 drop-shadow-lg backdrop-blur-md dark:bg-zinc-900/50"
          : "bg-white/80 dark:bg-zinc-900/50"
      }`}
    >
      <nav className="flex w-full justify-between">
        <div className="flex w-full items-center justify-between">
          <div className="">
            <h1 className="font-serif text-3xl font-bold">LoremBrand</h1>
          </div>
          <div className="flex gap-4 xl:hidden">
            <ThemeButton />
            <Button
              variant="icon"
              ariaLabel="toggle menu"
              onClick={handleOpen}
              aria-label="toggle menu"
              className=""
            >
              {open ? <IconX /> : <IconMenu />}
            </Button>
          </div>
        </div>
        <div className="desktop hidden items-center gap-8 xl:flex">
          {menus.map((item, index) => (
            <Link
              aria-label="go to menu"
              key={index}
              href={item.url}
              className={`capitalize ${
                pathName === item.url ? "scale-110 font-bold" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
          <ThemeButton />
        </div>
        <div
          className={`mobile-first absolute left-0 top-full flex w-full transform flex-col gap-4 bg-white p-[8%] transition-all delay-300 duration-500 xl:hidden dark:bg-black ${
            open ? "h-fit" : "hidden"
          }`}
        >
          <div className={`flex flex-col gap-4 ${open ? "block" : "hidden"}`}>
            {menus.map((item, index) => (
              <Link
                aria-label="go to menu"
                onClick={() => setOpen(false)}
                key={index}
                href={item.url}
                className={`rounded-md px-4 py-3 font-semibold capitalize transition-all duration-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black ${
                  pathName === item.url
                    ? "scale-110 bg-black font-bold text-white dark:bg-white dark:text-black"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
