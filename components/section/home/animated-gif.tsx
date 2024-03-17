"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Animatedgif() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(imageRef.current, {
        y: 1000,
        duration: 2,
        ease: "power4.out",
        opacity: 0,
      });
    },
    { scope: containerRef, dependencies: [] },
  );
  return (
    <div ref={containerRef} className=" w-full lg:relative lg:h-[70vh] ">
      <Image
        ref={imageRef}
        src="/image/nf-demo.png"
        alt="Hero"
        width={1920}
        height={1080}
        className="w-auto -translate-y-14 object-contain lg:absolute lg:bottom-20 lg:left-1/2 lg:h-full lg:-translate-x-1/2 lg:translate-y-0 lg:scale-110"
      />
    </div>
  );
}

export default Animatedgif;
