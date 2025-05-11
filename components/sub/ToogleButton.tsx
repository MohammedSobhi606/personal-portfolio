"use client";
import React, { useEffect, useState } from "react";
import { sunIcon, moonIcon } from "@/assets";
import { motion } from "framer-motion";
export default function ToogleButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, settheme] = useState("dark");

  useEffect(() => {
    const storagetheme = localStorage.getItem("theme");
    settheme(storagetheme!);
  }, [theme]);

  return (
    <div
      className={`${theme} bg-neutral-50 dark:bg-neutral-800 transition-colors -z-40`}
    >
      {" "}
      <div className="fixed top-6 md:top-12 bg-zinc-50 rounded-full p-1 right-8 md:right-16 text-yellow-500 cursor-pointer z-20">
        {theme == "dark" ? (
          <motion.span
            layout
            onClick={() => {
              localStorage.setItem("theme", "light");
              settheme("light");
            }}
          >
            {sunIcon}
          </motion.span>
        ) : (
          <motion.span
            layout
            onClick={() => {
              localStorage.setItem("theme", "dark");
              settheme("dark");
            }}
            className="text-blue-700/25"
          >
            {" "}
            {moonIcon}
          </motion.span>
        )}
      </div>
      {children}
    </div>
  );
}
