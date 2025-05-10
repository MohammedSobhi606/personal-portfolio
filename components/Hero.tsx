"use client";

import Image from "next/image";
import { heroIcons } from "@/assets/index";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";
export default function Hero() {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setmouseMove] = useState(false);

  const x = useMotionValue(0); // normal state that sore the clientX value + add the motions properties
  const y = useMotionValue(0);
  const handelMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };
  // handel mouse enter & set window offset
  const handelMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setmouseMove(true);
  };
  // destrucur innerwidth & innerHeight
  const { innerHeight, innerWidth } = windowOffset;
  // spring effect
  const springX = useSpring(x, { stiffness: 100, damping: 10 });
  const springY = useSpring(y, { stiffness: 100, damping: 10 });
  const rotateY = useTransform(springX, [0, innerWidth], [-30, 30]); // tranform hook تحويل وحدات tranform the x (0 to innerWidth) to degs (-30deg,30deg)
  const rotateX = useTransform(springY, [0, innerHeight], [10, -50]);
  const childVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
  };

  const parentVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        type: "spring",
        bounce: 0.5,
        delay: 0.3,
      },
    },
  };
  const parentVariantsforicons = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  return (
    <div
      className="h-screen grid place-items-center "
      onMouseMove={handelMouseMove}
      onMouseEnter={handelMouseEnter}
    >
      <div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          id="home"
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
            variants={childVariants}
            className="flex items-center justify-center"
          >
            <Image
              src={"/person.png"}
              alt="person image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />

            <span className=" absolute text-3xl font-semibold text-white">
              Hi
            </span>
          </motion.div>
          <h1 className="text-center font-bold tracking-wider text-gray-500 mainTiltle dark:text-white">
            I'm Mohammed Sobhi{" "}
          </h1>
          <h2 className="text-center font-bold tracking-wider text-gray-500 subsection dark:text-gray-300 ">
            Front End Web Devleoper
          </h2>
        </motion.div>
        {/* icons */}
        <motion.div
          variants={parentVariantsforicons}
          initial="hidden"
          animate="visible"
          className="mt-8 flex justify-center mainTiltle  gap-x-10  text-yellow-600"
        >
          {heroIcons.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="blank"
              className="rounded-lg hover:text-amber-500 transition-colors cursor-pointer hover:shadow shadow-amber-500 "
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
        {/* call to action */}
        <a
          href="#contact"
          className="mt-7 max-w-fit block rounded-lg bg-red-400 capitalize tracking-wider px-3 py-1 mx-auto text-center text-white hover:bg-red-500 transition-colors cursor-pointer"
        >
          Talk to me👋
        </a>
      </div>
    </div>
  );
}
