import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { SquarePen } from "lucide-react";
import { EditIdeaClarityModal } from "./edit-idea-clarity-modal";
import { Chart } from "@/assets/images";

export function IdeaClarityModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline-info" className="flex items-center gap-10">
          <span>Medium Risk</span>
          <SquarePen size="20" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]   pb-10 lg:px-20 md:px-10 px-4">
        <DialogHeader>
          <DialogTitle className="font-semibold text-lg text-center">
            Idea clarity score
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center md:gap-10 gap-5 text-center">
          <img src={Chart} className="xl:w-80 w-auto" alt="" />
          <p className="md:text-sm text-xs">
            Your startup idea has been evaluated based on four key validation
            points: Proof of the Problem, Solution Effectiveness, Identification
            of Targeted Audience, and Direct Competitors.
            <br />
            <br />
            Each validation point was scored on a scale from 1 (Low Risk) to 4
            (High Risk). The total score determines the overall risk level of
            your idea.
          </p>
        </div>
        <DialogClose asChild>
          <EditIdeaClarityModal />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
