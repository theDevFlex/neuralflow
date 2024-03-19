"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

function Animatedgif() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      className="mb-10 w-full lg:relative lg:h-[70vh] "
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      // whileHover={{ scale: 1.05 }}
    >
      <Image
        ref={imageRef}
        src="/image/nf-demo.png"
        alt="NeuralFlow Demo"
        width={1500}
        height={1500}
        className="hidden w-auto -translate-y-14 object-contain transition-all duration-300 ease-in-out md:flex lg:absolute lg:bottom-20 lg:left-1/2 lg:flex lg:h-full lg:-translate-x-1/2 lg:translate-y-0 lg:scale-110 lg:hover:scale-125"
      />
      <Image
        ref={imageRef}
        src="/image/nf-demo-mobile.png"
        alt="NeuralFlow Demo"
        width={1000}
        height={1000}
        className="flex w-auto -translate-y-14 rounded-lg object-contain px-5 transition-all duration-300 ease-in-out md:hidden"
      />
    </motion.div>
  );
}

export default Animatedgif;
