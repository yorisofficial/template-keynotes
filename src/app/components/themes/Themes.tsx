"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import Navbar from "../Navbar";

const Themes = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Themes;
