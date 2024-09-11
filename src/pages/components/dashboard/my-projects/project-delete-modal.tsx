import { useDeleteProject } from "@/api/hooks/dashboard/myProject";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/_ui/dialog";
import { Button } from "@/components/ui";

import { errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import {  useNavigate } from "react-router-dom";
export const ProjectDeleteModal = ({
  projectName,
  projectId,
}: {
  projectName: string;
  projectId: string;
}) => {
  const modal = useModal();
  const navigate = useNavigate(); 
  const { mutateAsync } = useDeleteProject();
  const queryClient = useQueryClient();
  async function deleteProject(id: string) {
    try {
      const response = await mutateAsync(id);
      queryClient.refetchQueries({ queryKey: ["/projects"] });
      navigate(`/dashboard/my-startups`);
      modal.close();
      successToast(response?.message);
    } catch (error: any) {
      errorToast(error);
    }
  }

  return (
    <div >
      <Dialog >
        <DialogTrigger onClick={(e) => e.stopPropagation()}>
          <span role="button">
            <div className="flex gap-1 text-red-500">
              <Trash2 size={16} className="mt-1" />
              <h1>Delete startup</h1>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent onClick={(e) => e.stopPropagation()}>
          <DialogHeader>
            <DialogTitle className="text-left ">
              <h4 className="text-foreground 2xl:text-[32px] text-2xl font-semibold">
                Delete Project
              </h4>
            </DialogTitle>
          </DialogHeader>
          <div>
            <p className="2xl:text-[22px] 2xl:leading-[26px] text-lg leading-[22px]">
              You are about to delete
              <span className="font-bold"> {projectName}</span>. All associated
              data will also be deleted. This action cannot be undone. Are you
              sure you want to delete
              <span className="font-bold"> {projectName}?</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <DialogClose>
              <Button variant="outline" className="w-full" >
                Cancel
              </Button>
            </DialogClose>
            <Button onClick={() => deleteProject(projectId)} className="w-full">
              Update
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
