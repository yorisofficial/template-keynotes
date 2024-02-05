import React from "react";
import data from "@/app/data/main-data.json";
import LoginData from "../tools/LoginData";
import ButtonBack from "@/app/components/ButtonBack";

const Page = ({ params }: { params: { id: number } }) => {
  const dataAll = data.mainakun;
  const item = dataAll.find((item) => item.id == params.id);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-24 py-32">
      <ButtonBack items={`/games`} />
      <div className="mt-8 flex w-full flex-col items-start justify-start">
        <ul className="w-full">
          <li>User Id : {item?.uid}</li>
          <li>Username : {item?.name}</li>
          <li>Rank : {item?.rank}</li>
          <LoginData item={item} />
        </ul>
      </div>
    </div>
  );
};

export default Page;
