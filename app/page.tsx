import { Nodes } from "@/components/asset/svgs";
import { MainLayout } from "@/components/layout/mainLayout";
import Animatedgif from "@/components/section/home/animated-gif";
import { Bonny } from "@/components/section/home/bonny";
import { Features } from "@/components/section/home/feature";
import { Hero } from "@/components/section/home/hero";
import { Integration } from "@/components/section/home/integration";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout className="">
      {/* hero section */}
      <Hero />

      {/* demo image/gif section */}
      <Animatedgif />
      {/* feature section */}
      <Features />

      {/* bonny section */}
      <Bonny />

      {/* integration section */}
      <Integration />
    </MainLayout>
  );
}
