"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { arrowLeftIcon, experienceData } from "@/assets/index";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Expieriance() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end end"],
  });
  const scrolY = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  return (
    <div id="experience" className="relative py-20 mycontainer overflow-hidden">
      <Heading text={"Expierince & Education"} />
      <Image
        src={"/education.png"}
        alt="expiriance"
        width={400}
        height={400}
        className="absolute -top-4 right-0 opacity-70 max-lg:hidden"
      />
      {/* cards */}
      <div
        ref={ref}
        className=" w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10 relative"
      >
        {experienceData.map((item, i) => (
          <div
            key={i}
            className={`w-full relative lg:w-[460px] z-10 ${
              i % 2 === 0 ? " lg:-left-[290px] " : "lg:left-[290px]"
            }   `}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                stiffness: 50,
                type: "spring",
              }}
              className="flex flex-col gap-y-3 rounded-md border border-red-300  dark:bg-zinc-500  p-4 -tracking-wide text-sm sm:text-lg "
            >
              <h1 className=" font-light text-gray-700 subsection dark:text-white">
                {item.title}
              </h1>
              <p className="text-gray-800 dark:text-white">
                <span className="block font-light ">Educations:</span>
                <span className="block pl-2 font-extralight bodyText">
                  {item.education}
                </span>
              </p>
              <div className="text-gray-800 dark:text-white">
                <span className="font-light">Expieriance:</span>
                <ul className="pl-2 list-disc list-inside">
                  {item.experience.map((exp, i) => (
                    <li key={i} className="my-2 font-extralight bodyText">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className={`absolute top-20  max-lg:hidden
               -translate-y-1/2 text-red-300 ${
                 i % 2 === 0 ? "left-full rotate-180" : " right-full"
               }`}
              >
                {" "}
                {arrowLeftIcon}
              </span>
            </motion.div>
            {/* date */}
            <div
              className={` w-14 absolute  lg:top-20 border border-gray-300  rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2
                bg-white 
                z-10
max-lg:hidden
              
               ${
                 i % 2 === 0
                   ? "left-full translate-x-1/2"
                   : "right-full -translate-x-1/2"
               }`}
            >
              {new Date().getFullYear() - experienceData.length + i + 1}
            </div>
          </div>
        ))}
        <motion.div
          initial={{
            scaleY: 0,
          }}
          style={{
            scaleY: scrolY,
          }}
          className="absolute w-1 h-full  -translate-x-1/2  rounded-full hidden
          dark:block
          dark:bg-white z-0 origin-top "
        ></motion.div>
      </div>
    </div>
  );
}
