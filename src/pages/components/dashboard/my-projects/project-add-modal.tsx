import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProjectForm } from "./project-form";
import { useForm } from "react-hook-form";
import { dashboardProjectsInitialValues } from "@/utils/initial-values/dashboard/Projects";
const ProjectAddModal = () => {
  const {
    control,
    handleSubmit,
    reset,
    register,

    formState: { errors },
  } = useForm({
    defaultValues: dashboardProjectsInitialValues,
  });

  const onsubmitHandler = (values: typeof dashboardProjectsInitialValues) => {
    console.log(values);
  };

  const commonProps = {
    control,
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

          <form onSubmit={handleSubmit(onsubmitHandler)} className="flex flex-col gap-4">
            <ProjectForm {...commonProps} />
            <div className="flex items-center justify-between gap-4">
              <Button type="button" variant="outline" className="w-full">
                Cancel
              </Button>
              <Button type="submit" variant="secondary" className="w-full">
                Edit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ProjectAddModal;
