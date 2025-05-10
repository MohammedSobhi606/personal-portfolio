"use client";
import Heading from "./sub/Heading";
import SingleQues from "./sub/SingleQues";
import { questions, QuestionArrow } from "@/assets/index";
import { motion } from "framer-motion";
export default function Questions() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 0.2s delay between each child
      },
    },
  };
  const childVariants = {
    initial: {
      x: -30,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div id="questions" className="mycontainer py-20">
      <Heading text={"Questions & Answers"} />
      <motion.ul
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        className="flex flex-col gap-4 origin-top"
      >
        {questions.map((question, i) => (
          <SingleQues
            question={question}
            index={i}
            childVariants={childVariants}
            key={i}
          />
        ))}
      </motion.ul>
    </div>
  );
}
