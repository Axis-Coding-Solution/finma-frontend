import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FileUpload from "@/components/ui/fileupload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";

const ProjectDeleteModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-2">
              <Trash2 size={14} className="mt-1" />
              <h1>Delete Project Card</h1>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-left ">Delete Project</DialogTitle>
          </DialogHeader>

          <div>
            <span>
              You are about to delete{" "}
              <span className="font-bold">Mad Cookies</span>. All associated
              data will also be deleted. This action cannot be undone. Are you
              sure you want to delete
              <span className="font-bold">Mad Cookies</span>?
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
            <Button variant="destructive" className="w-full">
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDeleteModal;
