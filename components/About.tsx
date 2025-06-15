"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import Achivments from "./sub/Achivments";
import { aboutText, arrowLeftIcon, downloadIcon, aboutData } from "@/assets";
export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen mycontainer  flex flex-col items-center justify-center "
    >
      <Heading text={"About Me"} />
      {/* image + paragraph +download button  */}
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          src={"/about-me.png"}
          alt="about me img"
          width={400}
          height={400}
          className="w-[300px] lg:w-[200px] max-md:hidden object-cover"
        />
        <div className="max-w-[800px] rounded-xl bg-zinc-100 dark:bg-zinc-600 dark:text-white p-5 text-justify relative">
          <span className="absolute -left-5 top-20 scale-[2.6] text-zinc-200 max-md:hidden dark:text-white">
            {arrowLeftIcon}
          </span>
          <p className=" font-light text-gray-700 first-letter:pl-3 bodyText dark:text-white">
            {aboutText}
          </p>
         
        </div>
      </div>
      {/* achivments section [git hub + clients] */}
      <div className="mt-20 w-full flex flex-wrap items-center   gap-y-10 justify-between">
        {aboutData.map((item, i) => (
          <Achivments
            key={i}
            icon={item.icon}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  );
}
