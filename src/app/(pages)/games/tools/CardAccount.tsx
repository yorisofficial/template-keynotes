import React from "react";
import ButtonMore from "./ButtonMore";
import { IconInfoCircle } from "@tabler/icons-react";
import BtnCopy from "./action/BtnCopy";
import BtnCopyPassword from "./action/BtnCopyPassword";

const CardAccount = ({ item }: { item: any }) => {
  const platform = [
    { name: "mail", login: item.platformLogin.mail },
    { name: "twitter", login: item.platformLogin.twitter },
    { name: "gmail", login: item.platformLogin.gmail },
    { name: "facebook", login: item.platformLogin.facebook },
  ];
  return (
    <div
      className={`card-items h-full w-full rounded-md border p-4 ${
        item.name !== "" ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="header flex w-full items-start justify-between">
          <span
            className={`
          flex gap-4 rounded-md px-4 py-2 font-semibold uppercase text-black
          ${
            item.status === "ready"
              ? "bg-green-500"
              : item.status === "ban"
                ? "bg-red-500"
                : item.status === "new"
                  ? "bg-yellow-500"
                  : null
          }
          `}
          >
            <IconInfoCircle /> {item.status}
          </span>
          <span className="text-3xl font-bold">Lv{item.level}</span>
        </div>
        <div className="main">
          <p className="font-mono">{item.uid}</p>
          <p className="text-3xl font-semibold">{item.name}</p>
          <p className="font-serif text-2xl font-bold">{item.rank}</p>
        </div>
        <div className="w-full space-y-2">
          <span className="font-semibold capitalize">
            {platform.find((item) => item.login?.username)?.name || ""}
          </span>
          <div className="w-full space-y-2">
            <BtnCopy>
              {platform.find((item) => item.login?.username)?.login?.username}
            </BtnCopy>
            <BtnCopyPassword>
              {platform.find((item) => item.login?.password)?.login?.password}
            </BtnCopyPassword>
          </div>
        </div>
      </div>
      <div className="footer mt-8 flex justify-end">
        <ButtonMore item={item} />
      </div>
    </div>
  );
};

export default CardAccount;
