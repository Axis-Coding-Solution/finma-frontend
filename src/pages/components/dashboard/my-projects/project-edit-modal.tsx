import { DialogTrigger, Dialog, DialogContent } from "@/components/_ui/dialog";

import { SquarePen } from "lucide-react";

import { useForm } from "react-hook-form";
import { dashboardProjectsInitialValues } from "@/utils/initial-values/dashboard/Projects";
import { createFormData, errorToast, successToast } from "@/utils";
import { useEditProjectMutation } from "@/api/hooks/dashboard/myProject";
import { useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/utils/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardProjectsSchema } from "@/utils/validation-schemas/dashoard/projects";
import { StartupForm } from "./startup-form";
export const ProjectEditModal = ({ projectId }: { projectId: string }) => {
  const modal = useModal();

  const {
    control,
    register,
    handleSubmit,

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
    // watch,
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
        <DialogTrigger onClick={(e) => e.stopPropagation()}>
          <span role="button">
            <div className="flex gap-1 text-foreground">
              <SquarePen size={16} className="mt-1" />
              <span>Edit project</span>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="bg-secondary 2xl:p-8 p-6 border-none 2xl:max-w-[1154px] md:max-w-[786px] max-w-auto">
          <div className="bg-background 2xl:p-16 p-8  rounded  flex flex-col 2xl:gap-[52px] gap-8">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onsubmitHandler)}
            >
              <StartupForm {...commonProps} errors={errors} />
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
