"use client";
import { navbarData, copyRightIcon } from "@/assets";
import { useRef, useState } from "react";

export default function SideNav() {
  const [id, setid] = useState("home");
  return (
    <div className="w-[60px] h-full fixed left-0 top-0 flex flex-col  justify-between border-r border-gray-200 px-4 py-10 z-10 max-sm:hidden">
      <a href="#" className="dark:text-white">
        <span className="text-3xl font-semibold text-red-400">M</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold">
          Sobhi
        </span>
      </a>
      <div className="space-y-2 ">
        {navbarData.map((item, i) => (
          <div key={i} className="flex flex-col gap-y-3 max-sm:gap-y-2">
            <a
              onClick={() => {
                setid(item.id);
              }}
              href={`#${item.id}`}
              className="group flex flex-col items-center gap-y-2"
            >
              <span
                className={`text-xl ${
                  id == item.id
                    ? "text-red-500 scale-110"
                    : "text-yellow-500 scale-100"
                } group-hover:scale-125 transition-all duration-100`}
              >
                {item.icon}
              </span>
              <span
                className={`text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-center duration-100 dark:text-white ${
                  id == item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.name}
              </span>
            </a>
          </div>
        ))}
      </div>

      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6 relative">
        {" "}
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left">
          {copyRightIcon} 2023 - 2025
        </span>
      </p>
    </div>
  );
}
