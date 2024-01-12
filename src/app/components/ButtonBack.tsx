"use client";
import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ButtonBack = ({ items }: { items: string }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(items);
  };
  return (
    <div className="w-full rounded-md border p-2">
      <Button ariaLabel="back" onClick={handleClick} className="group">
        <IconArrowLeft className="duration-300 group-hover:-translate-x-2" />
        Back to<code>.{items}</code>
      </Button>
    </div>
  );
};

export default ButtonBack;
