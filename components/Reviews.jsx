"use client";
import React, { useEffect, useRef, useState } from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import { arrowIcons, reviewsData, starIcons } from "@/assets";
import { animate, motion } from "framer-motion";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const PrevCard = useRef(0);
  const Slides = useRef([]);

  const RightClickHandler = () => {
    animate(Slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(Slides.current[PrevCard.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
  };
  const LeftClickHandler = () => {
    animate(Slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(Slides.current[PrevCard.current], {
      x: "100%",
    });
  };
  useEffect(() => {
    direction ? LeftClickHandler() : RightClickHandler();
    PrevCard.current = index;
  }, [index]);

  return (
    <div id="reviews" className="my-20 mycontainer ">
      <Heading text={"Reviews"} />
      <div className="flex flex-col items-center justify-center  ">
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="relative lg:w-[800px] max-md:w-[95%] max-sm:w-[280px] max-lg:w-[600px] lg:h-[500px] max-lg:h-[450px] max-md:h-[400px] max-sm:h-[600px] flex  items-center justify-center overflow-hidden "
        >
          {" "}
          {/* CARDS OF CARUSEL */}
          {reviewsData.map((review, i) => (
            <motion.div
              initial={{
                x: "100%",
              }}
              ref={(el) => {
                // Assign or update at index
                Slides.current[i] = el;
              }}
              key={i}
              className="absolute inset-0  flex flex-col items-center justify-center gap-y-4 border border-yellow-500 bg-zinc-50 p-2 md:p-5 rounded-lg  dark:bg-zinc-600"
            >
              {/* image & name & para */}
              <Image
                src={review.image}
                alt="review"
                width={130}
                height={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <h1 className="subsection text-center tracking-wider text-yellow-600">
                {review.name}
              </h1>
              <p className="bodyText text-justify font-extralight tracking-wide text-gray-400 first-letter:pl-2 dark:text-white">
                {review.comment}
              </p>
              <div className=" flex flex-col items-center justify-center gap-y-2">
                {/* stars */}
                <span className="text-lg font-light text-yellow-600 mr-3">
                  {review.stars.reduce((acc, num) => acc + num).toFixed(1)}
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {/* stars icon */}
                  {review.stars.map((star, i) => (
                    <span key={i}>
                      {star == 1 ? starIcons[0] : starIcons[1]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* arrow buttons */}
        <div className=" flex gap-x-6 mainTiltle  text-yellow-500 mt-4">
          <button
            onClick={() => {
              setDirection(true);
              setIndex(index - 1);
            }}
            className={` ${
              index === 0 ? "opacity-30 pointer-events-none" : "opacity-100"
            } cursor-pointer hover:scale-150 transition-all`}
          >
            {arrowIcons[0]}
          </button>
          <button
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
            className={` ${
              index === reviewsData.length - 1
                ? "opacity-30 pointer-events-none"
                : "opacity-100"
            } cursor-pointer hover:scale-150 transition-all`}
          >
            {arrowIcons[1]}
          </button>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
//
