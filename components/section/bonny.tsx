import { ChevronRight, Search } from "lucide-react";
import { BonnyIcon } from "../icons";

export function Bonny() {
  return (
    <div className="my-5 flex h-[80vh] w-full flex-col items-center justify-center gap-5 p-5 text-center">
      <BonnyIcon />
      <h3 className="text-3xl font-bold">
        Bonny, An Ai to help you in the journey
      </h3>
      <p className="max-w-7xl">
        Korem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur,
        magna nec mollis fermentum, libero arcu consequat nisi, non blandit ante
        dolor non leo. Praesent scelerisque urna sed risus vehicula, at maximus
        mi tincidunt.
      </p>
      <span className="flex items-center gap-3 rounded-sm border px-4 py-1 shadow-md md:p-4">
        <Search className="h-10 w-10 md:h-5 md:w-5" />
        <span className="line-clamp-1 text-xs md:text-base">
          Create a 2d Unet architecture with 3 depth layer. The input should be
          of 128,128,3 and 2 channel output
        </span>
        <ChevronRight className="h-10 w-10 md:h-5 md:w-5" />
      </span>
    </div>
  );
}
