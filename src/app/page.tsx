"use client";
import { IconBrandGithub, IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import PubgAnimation from "@/app/data/animation/pubg.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <main
      className="relative
     bg-white px-[4%] transition-all duration-700 ease-linear dark:bg-black"
    >
      <div className="absolute left-1/2 top-1/2 h-32 w-32 rounded-full bg-yellow-500 opacity-20 blur-3xl filter xl:h-[400px] xl:w-[400px]"></div>
      <div className="absolute left-1/3 top-1/2 h-32 w-32 rounded-full bg-red-500 opacity-20 blur-3xl filter xl:h-60 xl:w-60"></div>
      <div className="absolute left-1/2 top-1/3 h-32 w-32 rounded-full bg-blue-500 opacity-20 blur-3xl filter xl:h-60 xl:w-60"></div>
      <div className="flex h-screen w-full items-center justify-center px-[4%] xl:px-20">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <div title="Github Yoris Official" className="z-30 bg-black">
            <Link
              target="_blank"
              href="https://yorisofficial.vercel.app"
              aria-label="github profile"
            >
              <Lottie
                animationData={PubgAnimation}
                className="h-32 w-32"
                width={400}
                height={400}
                loop
              />
            </Link>
          </div>
          <h1 className="text-center text-5xl font-bold">Akun PUBG 2023</h1>
          <p className="max-w-5xl text-center">
            Website ini dibuat untuk pencatatan akun, dimana akun yang dicatat
            merupakan akun yang bisa digunakan dalam keperluar bermain game PUBG
            Mobile. Data login dan keterangan sudah hanya tinggal di tap untuk
            menyalin dan UI yang mudah di pahami semua kalangan pengguna
          </p>
          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="mb-4 font-bold">More modify here</p>
            <div className="flex w-full items-center justify-center gap-4">
              <div className="group relative">
                <Link
                  aria-label="github profile"
                  target="_blank"
                  href="https://github.com/yorisofficial/data-game/blob/main/src/app/data/data.json"
                  className="flex items-center gap-2 rounded bg-black px-6 py-3 font-semibold text-white duration-500 hover:bg-slate-800 dark:bg-white dark:text-black"
                >
                  <IconEdit />
                  Add new
                </Link>
                <div className="tooltip absolute -top-16 hidden w-60 bg-black px-4 py-2 text-white group-hover:block">
                  <p className="w-full text-center">Add new data</p>
                  <div className="absolute left-12 top-4 -z-10 h-8 w-8 rotate-45 bg-black"></div>
                </div>
              </div>
              <div className="group relative">
                <Link
                  aria-label="..."
                  target="_blank"
                  href="https://github.com/yorisofficial/data-game"
                  className="flex items-center gap-2 "
                >
                  <IconBrandGithub />
                  Repository
                </Link>
                <div className="tooltip absolute -top-16 hidden w-60 bg-black px-4 py-2 text-white group-hover:block">
                  <p className="w-full text-center">See Repository on Github</p>
                  <div className="absolute left-12 top-4 -z-10 h-8 w-8 rotate-45 bg-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
