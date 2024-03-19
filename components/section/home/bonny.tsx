import { ChevronRight, Search } from "lucide-react";
import { BonnyIcon } from "../../icons";

export function Bonny() {
  return (
    <div className="my-5 flex h-[80vh] w-full flex-col items-center justify-center gap-5 p-5 text-center">
      <BonnyIcon />
      <h3 className="text-xl font-bold md:text-3xl">
        Bonny, An AI to help you in the journey
      </h3>
      <p className="max-w-7xl">
        Bonny is an AI assistant that helps you save time by providing you with
        automatic node completion or creating and connecting nodes with your
        prompt.
      </p>
      <span className="flex items-center gap-3 rounded-sm border px-4 py-1 shadow-md md:p-4">
        <Search className="h-10 w-10 md:h-5 md:w-5" />
        <span className="line-clamp-1 text-xs md:text-base">
          Create a 2d Unet architecture with 3 depth layer. The input should be
          of 128, 128, 3 and 2 channel output
        </span>
        <ChevronRight className="h-10 w-10 md:h-5 md:w-5" />
      </span>
    </div>
  );
}
