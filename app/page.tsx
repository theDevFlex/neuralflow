import { Nodes } from "@/components/asset/svgs";
import { MainLayout } from "@/components/layout/mainLayout";
import { Bonny } from "@/components/section/home/bonny";
import { Features } from "@/components/section/home/feature";
import { Hero } from "@/components/section/home/hero";
import { Integration } from "@/components/section/home/integration";
import Animatedgif from "@/components/section/home/animated-gif";
import Image from "next/image";
import { Features2 } from "@/components/section/home/feature2";

export default function Home() {
  return (
    <MainLayout className="">
      <Hero />
      {/* hero section */}

      {/* demo image/gif section */}
      <Animatedgif />
      {/* feature section */}
      <Features />
      <Features2 />

      {/* bonny section */}
      <Bonny />

      {/* integration section */}
      <Integration />
    </MainLayout>
  );
}
