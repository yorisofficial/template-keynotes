import React from "react";
import ListAccount from "./tools/ListAccount";

const Page = () => {
  return (
    <div className="container w-full px-[5%] py-8 xl:px-24 xl:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold">
          Hallo from page Games
        </h1>
        <p className="w-full text-center xl:w-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          necessitatibus, unde sequi ad odio quis ipsa quaerat nostrum impedit,
          ratione velit id, quas cumque.
        </p>
      </div>
      <ListAccount />
    </div>
  );
};

export default Page;
