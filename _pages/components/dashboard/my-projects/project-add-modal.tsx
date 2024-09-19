import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/_ui/dialog";
import { Button } from "@/components/_ui/button";
import { ProjectForm } from "./project-form";
import { useForm } from "react-hook-form";
import { dashboardProjectsInitialValues } from "@/utils/initial-values/dashboard/Projects";
import { createFormData, errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { useAddProjectMutation } from "@/api/hooks/dashboard/myProject";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardProjectsSchema } from "@/utils/validation-schemas/dashoard/projects";
const ProjectAddModal = () => {
  const modal = useModal()
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: dashboardProjectsInitialValues,
    resolver: yupResolver(dashboardProjectsSchema as any)
  });
  const { mutateAsync } = useAddProjectMutation()
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const onsubmitHandler = async (
    values: typeof dashboardProjectsInitialValues
  ) => {
    try {
      const formData = createFormData(values)
      const response = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["/projects"] });
      navigate(`/dashboard/my-projects/${response.data._id}`)
      successToast(response.message);
      modal.close()
    } catch (error: any) {
      errorToast("Something went wrong while creating the project");
    }
  };

  const commonProps = {
    control,
    watch,
    register,
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <Button variant="default">+ Add new projects</Button>
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
            <ProjectForm {...commonProps} errors={errors} />
            <div className="flex items-center justify-between gap-4">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="secondary" className="w-full">
                Create
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ProjectAddModal;
