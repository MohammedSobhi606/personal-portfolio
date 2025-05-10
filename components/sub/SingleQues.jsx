"use client";
import { QuestionArrow } from "@/assets/index";
import { useState } from "react";
import { motion } from "framer-motion";
export default function SingleQues({ question, index, childVariants }) {
  const [show, setshow] = useState(false);
  return (
    <motion.li
      variants={childVariants}
      className="border border-yellow-500 p-1 rounded-lg"
    >
      <div
        onClick={() => setshow(!show)}
        className={`flex items-center text-xl font-extralight text-gray-800 hover:text-yellow-600 tracking-wide cursor-pointer dark:text-white dark:hover:bg-zinc700 dark:hover:text-yellow-600 ${
          show && "border-b text-yellow-600"
        }`}
      >
        <motion.span
          animate={{
            rotate: show ? 180 : 0,
          }}
        >
          {QuestionArrow}
        </motion.span>
        <h1>{question.question}</h1>
      </div>
      <motion.p
        initial={{
          scaleY: 0,
          height: 0,
        }}
        animate={{
          scaleY: show ? 1 : 0,
          height: show ? "auto" : 0,
        }}
        className="box-border pl-8 text-lg font-extralight tracking-wide text-gray-900 first-letter:pl-3 dark:text-gray-200 origin-top"
      >
        {question.answer}
      </motion.p>
    </motion.li>
  );
}
