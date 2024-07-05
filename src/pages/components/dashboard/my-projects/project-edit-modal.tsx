import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { FilePenLine } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ProjectForm } from "./project-form";
import { useForm } from "react-hook-form";
import { dashboardProjectsInitialValues } from "@/utils/initial-values/dashboard/Projects";
export const ProjectEditModal = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: dashboardProjectsInitialValues,
  });

  const commonProps = {
    control,
    register,
    errors,
  };
  const onsubmitHandler = (values: typeof dashboardProjectsInitialValues) => {
    console.log(values);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-1">
              <FilePenLine size={16} className="mt-1" />
              <h1 className="">Edit Project Card</h1>
            </div>{" "}
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
            <ProjectForm {...commonProps} />
            <div className="flex items-center justify-between gap-4">
              <Button type="button" variant="outline" className="w-full">
                Cancel
              </Button>
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
