import { DialogTrigger, Dialog, DialogContent } from "@/components/_ui/dialog";

import { SquarePen } from "lucide-react";

import { useForm } from "react-hook-form";
import { createFormData, errorToast, successToast } from "@/utils";
import {
  useEditStartupMutation,
  useGetStartupById,
} from "@/api/hooks/dashboard";
import { useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/utils/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { StartupForm } from "./startup-form";
import { dashboardStartUpInitialValues } from "@/utils/initial-values/dashboard/start-up";
import { dashboardStartUpSchema } from "@/utils/validation-schemas/dashoard/start-up";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { STARTUPS_QUERY_KEY } from "@/api/hooks/dashboard";
export const ProjectEditModal = ({ projectId }: { projectId: string }) => {
  const modal = useModal();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data } = useGetStartupById(projectId);
  const { mutateAsync } = useEditStartupMutation();

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: dashboardStartUpInitialValues,
    resolver: yupResolver(dashboardStartUpSchema as any),
  });

  useEffect(() => {
    if (data)
      reset({
        name: data.name,
        bio: data.bio,
        industry: data.industry,
        logo: data.logo,
      });
  }, [data]);

  const commonProps = {
    control,
    register,
    errors,
    watch,
    isSubmitting,
  };

  const onsubmitHandler = async (
    values: typeof dashboardStartUpInitialValues
  ) => {
    try {
      const formData = createFormData(values);
      await mutateAsync({ data: formData, id: projectId });
      queryClient.invalidateQueries({
        queryKey: [STARTUPS_QUERY_KEY],
      });
      queryClient.invalidateQueries({
        queryKey: [STARTUPS_QUERY_KEY, projectId],
      });
      navigate("/dashboard/my-startups");
      successToast("Startup updated successfully!");
      modal.close();
    } catch (error: any) {
      errorToast(error.message);
    }
  };
  return (
    <Dialog modal={modal.show} onOpenChange={modal.setShow}>
      <DialogTrigger onClick={(e) => e.stopPropagation()} asChild>
        <span role="button">
          <div className="flex gap-1 text-foreground">
            <SquarePen size={16} className="mt-1" />
            <span>Edit startup</span>
          </div>
        </span>
      </DialogTrigger>
      <DialogContent
      showCloseButton={false}
        onClick={(e) => e.stopPropagation()}
        className="bg-secondary 2xl:p-8 sm:p-6 p-4 border-none 2xl:max-w-[1154px] md:max-w-[786px] max-w-auto"
      >
        <div className="bg-background 2xl:p-16 sm:p-6 p-4  rounded  flex flex-col 2xl:gap-[52px] gap-8">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onsubmitHandler)}
          >
            <StartupForm
              {...commonProps}
              errors={errors}
              title="Edit"
              detail="Update"
            />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
