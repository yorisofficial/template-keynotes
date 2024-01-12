"use client";
import React, { useState } from "react";
import CardAccount from "./CardAccount";
import data from "@/app/data/main-data.json";
import Button from "@/app/components/Button";
import { IconSearch } from "@tabler/icons-react";

const ListAccount = () => {
  const dataAll = data.mainakun;
  const [dataAllSorted, setDataAllSorted] = useState("asc");
  const [search, setSearch] = useState("");
  const handleSort = () => {
    if (dataAllSorted === "asc") {
      setDataAllSorted("desc");
    } else {
      setDataAllSorted("asc");
    }
  };

  return (
    <div>
      <div className="mt-8 flex w-full flex-col justify-between gap-6 rounded-md xl:flex-row">
        <Button
          ariaLabel="sort item by newest"
          className=""
          onClick={handleSort}
        >
          <span className="font-light">Sort by</span>{" "}
          {dataAllSorted === "asc" ? "Terlama" : "Terbaru"}
        </Button>
        <div className="relative w-full xl:w-fit">
          <input
            className="h-full w-full rounded-md border-2 py-4 pl-10 pr-2 xl:w-fit xl:py-2"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by name"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <IconSearch size={20} />
          </div>
        </div>
      </div>
      <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {dataAll
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()),
          )
          .sort((a, b) => (dataAllSorted === "asc" ? a.id - b.id : b.id - a.id))
          .map((item) => (
            <CardAccount key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ListAccount;
