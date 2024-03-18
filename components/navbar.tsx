import { cn } from "@/lib/utils";
import { NFLogo } from "./icons";
import { Button } from "./ui/button";
import Link from "next/link";

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "absolute top-0 flex h-[5rem] w-full items-center justify-between gap-5 px-6 py-2",
        className,
      )}
    >
      <Link href="/">
        <div className="flex items-center gap-2">
          <NFLogo />
          <h1 className="font-bold">NeuralFlow</h1>
          <h2 className="rounded-sm bg-foreground/30 px-1 py-0.5 text-xs font-medium text-secondary">
            v0.1.2 Beta
          </h2>
        </div>
      </Link>
      {/* <Button className="border border-primary bg-secondary-foreground text-secondary hover:border hover:border-secondary">
        Login
      </Button> */}
    </div>
  );
}
