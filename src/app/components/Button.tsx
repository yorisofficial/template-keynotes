"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "borderless" | "icon";
}

const Button = ({
  children,
  className,
  ariaLabel,
  onClick,
  disabled,
  type,
  variant = "primary",
}: Props) => {
  const styleButton = {
    primary:
      "flex w-fit gap-4 rounded-md border-2 border-black bg-black px-8 py-2.5 font-semibold text-white dark:border-white dark:bg-white dark:text-black",
    borderless:
      "flex gap-4 rounded-md border-2 border-black dark:border-white px-8 py-2.5 font-semibold",
    icon: "flex items-center justify-center rounded-md bg-black p-2 font-semibold text-white dark:bg-white dark:text-black",
  };

  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`${styleButton[variant]} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
