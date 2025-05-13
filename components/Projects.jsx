"use client";
import { useEffect, useRef, useState } from "react";
import Heading from "./sub/Heading";
import ProjectCard from "./sub/ProjectCard";
import { projectsButton, projectsData } from "@/assets/index";
import { animate, motion } from "framer-motion";
export default function Projects() {
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonRefs = useRef([]);
  const handleClick = () => {
    animate(buttonRefs.current[prevIndex.current], { scale: 1, opacity: 0.5 });
    animate(buttonRefs.current[index], {
      scale: 1.2,
      opacity: 1,
    });
  };
  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  const filterdData = projectsData.filter((item) => item.tech.includes(tech));
  return (
    <div id="projects" className="my-20 mycontainer ">
      <Heading text={"Projects"} />
      {/* categories */}
      <div className="flex flex-wrap items-center  gap-4 py-10">
        {projectsButton.map((button, i) => (
          <motion.button
            initial={{
              scale: 1,
              opacity: 0.5,
            }}
            ref={(el) => {
              buttonRefs.current[i] = el;
            }}
            onClick={() => {
              setTech(button);
              setIndex(i);
            }}
            key={i}
            className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400 cursor-pointer"
          >
            {button}
          </motion.button>
        ))}
      </div>
      {/* projects */}
      <div className=" grid w-full grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 ">
        {}
        {tech === "All"
          ? projectsData.map((data, i) => (
              <motion.div key={i} layout>
                {" "}
                <ProjectCard data={data} index={i} />
              </motion.div>
            ))
          : filterdData.map((data, i) => (
              <motion.div key={i} layout>
                <ProjectCard data={data} index={i} />
              </motion.div>
            ))}
      </div>
    </div>
  );
}
