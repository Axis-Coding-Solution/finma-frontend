import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { FilePenLine } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ProjectForm } from "./project-form";
export const ProjectEditModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-1">
              <FilePenLine size={16} className="mt-1" />
              <h1 className="">Edit Project Card</h1>
            </div>{" "}
          </span>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-left ">Project Card</DialogTitle>
          </DialogHeader>
          <ProjectForm />
          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
            <Button variant="secondary" className="w-full">
              Update
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
