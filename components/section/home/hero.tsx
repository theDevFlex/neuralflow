import { Button } from "@/components/ui/button";
import TryAlpha from "./try-alpha.button";

export function Hero() {
  return (
    <div className="flex w-full flex-col items-start gap-5 bg-primary px-5 py-20 pb-32 md:items-center">
      <h2 className="text-4xl  font-medium leading-tight  sm:text-[4rem] md:text-[6rem] lg:text-[8rem]">
        Build, <span className="text-primary-foreground">Integrate,</span> Train
      </h2>
      <p className="text-left text-lg font-semibold text-primary-foreground md:text-center">
        A no code platform to build, integrate and train your machine learning
        models.
      </p>
      <div className="flex flex-wrap gap-4">
        {/*<Button
            variant="outline"
            className="bg-foreground text-background hover:bg-foreground/80 hover:text-background/90"
            size="lg"
          >
            Join Beta Waitlist
          </Button> */}
        <TryAlpha />
      </div>
    </div>
  );
}
