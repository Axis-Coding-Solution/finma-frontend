import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash, Trash2 } from "lucide-react";

export const DeleteChatModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-start items-center gap-2 cursor-pointer px-1">
          <div className=" ">
            <Trash2 size={14} />
          </div>
          <h1 className="text-sm">Delete Chat</h1>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">
            Delete Selected massage(s)
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="deleteMe" />
            <label
              htmlFor="deleteMe"
              className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Delete for me
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="deleteOther" />
            <label
              htmlFor="deleteOther"
              className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Delete for Salama
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Button variant="outline" className="w-full">
            Cancel
          </Button>
          <Button variant="destructive" className="w-full">
            <Trash size="20" />
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
