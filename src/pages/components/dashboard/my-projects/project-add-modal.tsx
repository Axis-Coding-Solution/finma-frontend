import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/_ui/dialog";
import { useForm } from "react-hook-form";
import { dashboardProjectsInitialValues } from "@/utils/initial-values/dashboard/Projects";
import { createFormData, errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { useAddProjectMutation } from "@/api/hooks/dashboard/myProject";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardProjectsSchema } from "@/utils/validation-schemas/dashoard/projects";
import { Button } from "@/components/ui";
import { CloudUpload, Plus } from "lucide-react";
import { MainHeading } from "../../common";
import { ProjectAddForm } from "./project-add-form";
const ProjectAddModal = ({projectId}:{projectId :string}) => {
  const modal = useModal();
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: dashboardProjectsInitialValues,
    resolver: yupResolver(dashboardProjectsSchema as any),
  });
  const { mutateAsync } = useAddProjectMutation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onsubmitHandler = async (
    values: typeof dashboardProjectsInitialValues
  ) => {
    try {
      const formData = createFormData(values);
      const response = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["/projects"] });
      navigate(`/dashboard/my-projects/${response.data._id}`);
      successToast(response.message);
      modal.close();
    } catch (error: any) {
      console.error("Error:", error);
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
            <Button icon={<Plus />}>New startup</Button>
          </span>
        </DialogTrigger>
        <DialogContent className="bg-secondary 2xl:p-8 p-6 border-none 2xl:max-w-[1154px] md:max-w-[786px] max-w-auto">
          <div className="bg-background 2xl:p-16 p-8  rounded  flex flex-col 2xl:gap-[52px] gap-8">
            <div className="flex md:flex-row flex-col  justify-between md:items-start items-center gap-8">
              <div className="flex flex-col 2xl:gap-3 gap-2">
                <h4 className="2xl:text-[44px] text-3xl font-semibold text-foreground">
                  Startup card
                </h4>
                <p className="2xl:text-2xl text-lg text-primary-disabled">
                  Add or update this card anytime for your startup
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="2xl:w-36 w-28 2xl:h-36 h-28 rounded-full border-2 border-info flex flex-col justify-center items-center">
                  <CloudUpload className="text-info" size={36} />
                  <div className="flex flex-col gap-0 leading-0 text-foreground 2xl:text-base text-center text-sm">
                    <p>Best</p>
                    <p>190 x 190</p>
                  </div>
                </div>
                <h6 className="2xl:text-2xl text-lg font-medium">Upload logo</h6>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <ProjectAddForm {...commonProps} errors={errors} />
              <div className="flex justify-end">
                <div className="md:w-1/2 w-full flex items-center justify-between gap-4">
                  <DialogClose asChild>
                    <Button type="button" variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit"    className="w-full">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ProjectAddModal;
