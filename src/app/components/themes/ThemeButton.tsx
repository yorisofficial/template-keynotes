"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import {
  IconDeviceDesktop,
  IconMoon,
  IconSettings,
  IconSun,
} from "@tabler/icons-react";
import Button from "../Button";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [themes, setThemes] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const handleThemeLight = () => setTheme("light");
  const handleThemeDark = () => setTheme("dark");

  return (
    <div className="relative">
      <Button
        ariaLabel="toggle theme"
        variant="icon"
        className="group"
        onClick={handleClick}
      >
        <IconSettings className={`${show ? "animate-spin" : ""}`} size={24} />
      </Button>
      {show && (
        <div className="absolute right-0 top-full flex w-[200px] translate-y-6 flex-col gap-4 rounded-md bg-black p-4 text-white dark:bg-white dark:text-black">
          <button
            onClick={handleThemeDark}
            className={`btn_themes ${
              theme === "dark"
                ? "bg-white text-black dark:bg-black dark:text-white"
                : ""
            }`}
          >
            <IconMoon /> Dark theme
          </button>
          <button
            onClick={handleThemeLight}
            className={`btn_themes ${
              theme === "light"
                ? "bg-white text-black dark:bg-black dark:text-white"
                : ""
            }`}
          >
            <IconSun /> Light theme
          </button>
          <button
            onClick={() => setTheme("")}
            className={`btn_themes ${
              theme === "system"
                ? "bg-slate-800 text-white dark:bg-black dark:text-white"
                : ""
            }`}
          >
            <IconDeviceDesktop /> System
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeButton;
