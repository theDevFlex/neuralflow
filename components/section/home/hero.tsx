import { MoveRight } from "lucide-react";
import { Button } from "../../ui/button";

export function Hero() {
  return (
    <div className="flex w-full flex-col items-start gap-5 bg-primary px-5 py-20 pb-32 md:items-center">
      <h2 className="text-[4rem] font-medium leading-tight md:text-[8rem]">
        Build, <span className="text-primary-foreground">Integrate,</span> Train
      </h2>
      <p className="text-primary-foreground">
        Our platform is in the beta phase and might occasionally encounter
        errors. Please feel free to report any bugs via our issue tracker.
      </p>
      <Button
        className="flex gap-2 border border-secondary-foreground"
        variant={"secondary"}
      >
        Try Now <MoveRight strokeWidth={"1px"} />
      </Button>
    </div>
  );
}
