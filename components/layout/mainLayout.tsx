import { cn } from "@/lib/utils";
import { Navbar } from "../navbar";
import { Footer } from "../section/home/footer";

export function MainLayout({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <Navbar />
      <div
        {...props}
        className={cn(
          "flex min-h-[calc(100vh-5rem)] w-full flex-col items-center gap-5",
          className,
        )}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
