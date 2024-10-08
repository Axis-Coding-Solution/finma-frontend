import { useDeleteProject } from "@/api/hooks/dashboard/myProject";
import { Button } from "@/components/_ui/button";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/_ui/dialog";

import { errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
export const ProjectDeleteModal = ({
  projectName,
  projectId,
}: {
  projectName: string;
  projectId: string;
}) => {
  const modal = useModal();
  const { mutateAsync } = useDeleteProject()
  const queryClient = useQueryClient();
  async function deleteProject(id: string) {
    try {
      const response = await mutateAsync(id);
      queryClient.invalidateQueries({ queryKey: ["/projects"] })
      modal.close();
      successToast(response?.message);
    } catch (error: any) {
      errorToast(error);
    }
  }

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
              <span className="font-bold"> {projectName}</span>. All associated
              data will also be deleted. This action cannot be undone. Are you
              sure you want to delete
              <span className="font-bold"> {projectName}?</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <DialogClose asChild>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => deleteProject(projectId)}
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
