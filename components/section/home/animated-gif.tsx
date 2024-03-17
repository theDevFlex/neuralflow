"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Animatedgif() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  useGSAP(
    () => {
      if (!containerRef.current || !imageRef.current) return;
      gsap.fromTo(
        imageRef.current,
        {
          y: 500,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1)",
        },
      );
    },

    { scope: containerRef },
  );
  return (
    <div ref={containerRef} className="mb-10 w-full lg:relative lg:h-[70vh] ">
      <Image
        ref={imageRef}
        src="/image/nf-demo.png"
        alt="Hero"
        width={1920}
        height={1080}
        className="w-auto  -translate-y-14 object-contain opacity-0 lg:absolute lg:bottom-20 lg:left-1/2 lg:h-full lg:-translate-x-1/2 lg:translate-y-0 lg:scale-110"
      />
    </div>
  );
}

export default Animatedgif;
