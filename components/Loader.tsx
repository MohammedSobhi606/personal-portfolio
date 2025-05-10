"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: loading ? 0 : "-100%",
      }}
      transition={{
        duration: 0.2,
      }}
      className="h-full w-full fixed grid place-items-center bg-gradient-to-b from-yellow-50 to-red-50 z-50"
    >
      <Image width={100} height={100} src={"/spinner.gif"} alt="loader" />
    </motion.div>
  );
}
