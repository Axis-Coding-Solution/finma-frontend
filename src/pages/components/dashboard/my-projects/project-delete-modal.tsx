import { STARTUPS_QUERY_KEY, useDeleteStartup } from "@/api/hooks/dashboard";
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

export const ProjectDeleteModal = ({
  projectName,
  projectId,
}: {
  projectName: string;
  projectId: string;
}) => {
  const modal = useModal();
  const { mutateAsync, isPending } = useDeleteStartup();
  const queryClient = useQueryClient();
  async function deleteProject(id: string) {
    try {
      const response = await mutateAsync(id);
      queryClient.invalidateQueries({ queryKey: [STARTUPS_QUERY_KEY] });
      modal.close();
      successToast(response?.message);
    } catch (error: any) {
      errorToast(error);
    }
  }

  return (
    <Dialog modal={modal.show} onOpenChange={modal.setShow}>
      <DialogTrigger onClick={(e) => e.stopPropagation()}>
        <span role="button">
          <div className="flex gap-1 text-red-500">
            <Trash2 size={16} className="mt-1" />
            <h1>Delete startup</h1>
          </div>
        </span>
      </DialogTrigger>
      <DialogContent showCloseButton={false} onClick={(e) => e.stopPropagation()}>
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
        <div className="grid grid-cols-2 items-center justify-between gap-4">
          <DialogClose>
            <Button disabled={isPending} variant="outline" className="w-full">
              Cancel
            </Button>
          </DialogClose>
          <Button
            disabled={isPending}
            onClick={() => deleteProject(projectId)}
            className="w-full"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
