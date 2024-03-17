import { Nodes } from "@/components/asset/svgs";
import { MainLayout } from "@/components/layout/mainLayout";
import { Bonny } from "@/components/section/home/bonny";
import { Features } from "@/components/section/home/feature";
import { Hero } from "@/components/section/home/hero";
import { Integration } from "@/components/section/home/integration";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout className="">
      {/* hero section */}
      <Hero />

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
      <Features />

      {/* bonny section */}
      <Bonny />

      {/* integration section */}
      <Integration />
    </MainLayout>
  );
}
