import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

import { FilePenLine } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ProjectForm } from "./project-form";
import { useForm } from "react-hook-form";
import { dashboardProjectsInitialValues } from "@/utils/initial-values/dashboard/Projects";
import { useState } from "react";
import { createFormData, errorToast, successToast } from "@/utils";
import { useEditProjectMutation } from "@/api/hooks/dashboard/myProject";
import { useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/utils/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardProjectsSchema } from "@/utils/validation-schemas/dashoard/projects";
export const ProjectEditModal = ({ projectId }: { projectId: string }) => {
  const [project] = useState<any>({});
  const modal = useModal()

  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: dashboardProjectsInitialValues,
    resolver: yupResolver(dashboardProjectsSchema as any)
  });
  const { mutateAsync } = useEditProjectMutation()
  const queryClient = useQueryClient();
  const commonProps = {
    control,
    register,
    errors,
    watch,
  };

  const onsubmitHandler = async (
    values: typeof dashboardProjectsInitialValues
  ) => {
    try {
      const formData = createFormData(values);
      await mutateAsync({ data: formData, id: projectId });
      queryClient.invalidateQueries({ queryKey: ["/projects"] });
      successToast("Updated Successfully");
      modal.close()
    } catch (error: any) {
      errorToast(error.message);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-1">
              <FilePenLine size={16} className="mt-1" />
              <h1 className="">Edit Project Card</h1>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-left ">Project Card</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(onsubmitHandler)}
            className="flex flex-col gap-4"
          >
            <ProjectForm
              {...commonProps}
              data={project}
              reset={reset}
              id={projectId}
            />
            <div className="flex items-center justify-between gap-4">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="secondary" className="w-full">
                Update
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
