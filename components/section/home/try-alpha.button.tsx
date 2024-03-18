"use client";
import { MoveRight } from "lucide-react";

import { ALPHA_URL } from "@/config";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";

function TryAlpha() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 rounded-md border border-secondary-foreground bg-background p-2 px-4 text-sm font-medium hover:bg-background/60">
        Try Alpha <MoveRight strokeWidth={"1px"} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Alpha is made just for POC</DialogTitle>
          <DialogDescription className="py-4">
            You might ocassionally encounter error. Your progress can might be
            lost at any time. Please report any bugs via our issue tracker.
          </DialogDescription>
          <DialogFooter>
            <DialogClose>
              <a href={ALPHA_URL} target="_blank" rel="noreferrer">
                <Button
                  variant={"secondary"}
                  className="border border-primary hover:bg-primary"
                >
                  Go to Alpha
                </Button>
              </a>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
export default TryAlpha;
