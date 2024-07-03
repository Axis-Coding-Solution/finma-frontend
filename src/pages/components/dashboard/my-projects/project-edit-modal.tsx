import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FilePenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FileUpload from "@/components/ui/fileupload";
const statusOptions = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
];
const ProjectEditModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-2">
              <FilePenLine size={14} className="mt-1" />
              <h1>Edit Project Card</h1>
            </div>{" "}
          </span>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-left ">Project Card</DialogTitle>
          </DialogHeader>
          <div className="flex  gap-5 items-start">
            <div className="max-w-[55%] w-full flex flex-col gap-8">
              <div>
                {" "}
                <Label>Project Name</Label>
                <Input />
              </div>
              <div>
                <Label>Tagline</Label>
                <Input />
              </div>
            </div>
            <div className="max-w-[45%] w-full">
              <Label>Project Logo</Label>
              <FileUpload text="Upload project logo" />
            </div>
          </div>
          <div>
            <Label>Project bio (130 character only)</Label>
            <Input />
          </div>

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

export default ProjectEditModal;
