import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/_ui/dialog";

import {  SquarePen } from "lucide-react";


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
import { Button } from "@/components/ui";
export const ProjectEditModal = ({ projectId }: { projectId: string }) => {
  const [project] = useState<any>({});
  const modal = useModal();

  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: dashboardProjectsInitialValues,
    resolver: yupResolver(dashboardProjectsSchema as any),
  });
  const { mutateAsync } = useEditProjectMutation();
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
      modal.close();
    } catch (error: any) {
      errorToast(error.message);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-1 text-foreground">
              <SquarePen size={16} className="mt-1" />
              <span>Edit project</span>
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
            <div className="flex items-center justify-between gap-4 2xl:mt-5 mt-2">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="w-full">
                Update
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
