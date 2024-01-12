"use client";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonMore = ({ item }: { item: any }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/games/${item.id}`);
  };
  return (
    <div>
      <button
        aria-label="see more"
        onClick={handleClick}
        className="group flex items-center gap-2 underline"
      >
        See more{" "}
        <IconArrowRight className="duration-300 group-hover:translate-x-2" />
      </button>
    </div>
  );
};

export default ButtonMore;
