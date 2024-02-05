import React from "react";
import BtnCopy from "./action/BtnCopy";
import BtnCopyPassword from "./action/BtnCopyPassword";

const LoginData = ({ item }: { item: any }) => {
  const platforms = [
    { name: "facebook", login: item.platformLogin.facebook },
    { name: "twitter", login: item.platformLogin.twitter },
    { name: "gmail", login: item.platformLogin.gmail },
    { name: "mail", login: item.platformLogin.mail },
  ];
  return (
    <div className="mt-8 flex w-full flex-wrap gap-8">
      {platforms.map(
        (platform) =>
          platform.login?.username && (
            <div
              key={platform.name}
              className="rounded-lg border border-black p-4"
            >
              <h1 className="mb-4 text-2xl font-bold capitalize">
                {platform.name}
              </h1>
              <div className="space-y-1">
                <span>Username</span>
                <BtnCopy>{platform.login?.username}</BtnCopy>
              </div>
              <div className="space-y-1">
                <span>Password</span>
                <BtnCopyPassword>{platform.login?.password}</BtnCopyPassword>
              </div>
            </div>
          ),
      )}
    </div>
  );
};

export default LoginData;
