import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { errorToast, successToast } from "@/utils";
import axios from "axios";
import { Trash2 } from "lucide-react";
export const ProjectDeleteModal = ({
  projectName,
  projectId,
}: {
  projectName: string;
  projectId: string;
}) => {
  console.log("🚀 ~ id:", projectId);
  console.log("🚀 ~ ProjectDeleteModal ~ name:", projectName);
  const deleteData = (projectId) => {
    try {
      const response = axios.delete(`/projects/${projectId}`);
      successToast("Deleted Successfully");
    } catch (error) {
      errorToast("Something went wrong");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-1 text-red-500">
              <Trash2 size={16} className="mt-1" />
              <h1 className="">Delete Card</h1>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-left ">Delete Project</DialogTitle>
          </DialogHeader>
          <div>
            <p>
              You are about to delete
              <span className="font-bold"> {projectName}</span>. All
              associated data will also be deleted. This action cannot be
              undone. Are you sure you want to delete
              <span className="font-bold"> {projectName}?</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteData(projectId)}
              className="w-full"
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
