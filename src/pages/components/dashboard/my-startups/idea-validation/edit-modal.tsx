import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { SquarePen } from "lucide-react";

export const IdeaValidationCardEditModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-1 text-foreground">
              <SquarePen size={16} className="mt-1" />
              <span>Edit</span>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="2xl:min-w-[885px] min-w-[685px] 2xl:p-[52px] p-8">
          <DialogHeader>
            <DialogTitle className="text-left ">
              <h4 className="text-foreground 2xl:text-[32px] text-2xl font-semibold">
                Project Card
              </h4>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
