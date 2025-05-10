"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { skillsData } from "@/assets/index";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Skills() {
  const ref = useRef(null);
  const inview = useInView(ref);
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 30, x: 20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  //   😂😂😂😂😂😂😂 don't give initial and animate to chidren
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-6 mycontainer"
    >
      <Heading text={"Skills"} />
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={inview ? "visible" : "hidden"}
        ref={ref}
        className=" flex w-full lg:justify-between flex-wrap gap-x-8 lg:gap-y-10 gap-y-6 "
      >
        {skillsData.map((skill, i) => (
          <motion.div
            variants={childVariants}
            //   😂😂😂😂😂😂😂 don't give initial and animate to chidren
            whileHover={{
              scale: 1.1,
            }}
            key={i}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 lg:px-5 px-2 py-2 "
          >
            {/* images */}
            <Image
              src={skill.icon}
              alt="skill img"
              width={100}
              height={100}
              className=" h-auto w-[40px]"
            />
            <p className="text-sm text-gray-600">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
