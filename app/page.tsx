import { Nodes } from "@/components/asset/svgs";
import { MainLayout } from "@/components/layout/mainLayout";
import { Bonny } from "@/components/section/bonny";
import { Features } from "@/components/section/feature";
import { Hero } from "@/components/section/hero";
import { Integration } from "@/components/section/integration";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout className="">
      {/* hero section */}
      <div className="flex w-full flex-col items-start gap-5 bg-primary px-5 py-20 pb-32 md:items-center">
        <Hero />
      </div>

      {/* demo image/gif section */}
      <div className=" w-full lg:relative lg:h-[70vh] ">
        <Image
          src="/image/nf-demo.png"
          alt="Hero"
          width={1920}
          height={1080}
          className="w-auto -translate-y-14 object-contain lg:absolute lg:bottom-20 lg:left-1/2 lg:h-full lg:-translate-x-1/2 lg:translate-y-0 lg:scale-110"
        />
      </div>

      {/* feature section */}
      <div className="-mt-10 flex w-full flex-col items-center gap-10 px-5 lg:mt-0 lg:px-32">
        <Features />
      </div>

      {/* bonny section */}
      <Bonny />

      {/* integration section */}
      <Integration />
    </MainLayout>
  );
}
