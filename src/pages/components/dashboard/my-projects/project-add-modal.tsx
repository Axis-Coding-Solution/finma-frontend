import { DialogTrigger, Dialog, DialogContent } from "@/components/_ui/dialog";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";
import { StartupForm } from "./startup-form";
import {
  STARTUPS_QUERY_KEY,
  useAddStartupMutation,
} from "@/api/hooks/dashboard";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createFormData, errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { dashboardStartUpInitialValues } from "@/utils/initial-values/dashboard/start-up";
import { dashboardStartUpSchema } from "@/utils/validation-schemas/dashoard/start-up";
import { WizardDialog } from "@/components/ui/wizard-dialog";
import { WIZARD_TYPES } from "@/utils/constants";

const ProjectAddModal = ({ wizardType }: { wizardType: string }) => {
  const modal = useModal();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync } = useAddStartupMutation();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: dashboardStartUpInitialValues,
    resolver: yupResolver(dashboardStartUpSchema as any),
  });

  const onsubmitHandler = async (
    values: typeof dashboardStartUpInitialValues
  ) => {
    try {
      const formData = createFormData(values);
      const response = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: [STARTUPS_QUERY_KEY] });
      navigate(`/dashboard/my-startups/${response.data._id}`);
      successToast(response.message);
      modal.close();
    } catch (error: any) {
      errorToast("Something went wrong while creating the project");
    }
  };

  const commonProps = {
    control,
    watch,
    register,
    isSubmitting,
  };

  const showWizard = wizardType === WIZARD_TYPES.STARTUPS.NEW_STARTUPS;

  return (
    <Dialog modal={modal.show} onOpenChange={modal.setShow}>
      <DialogTrigger asChild={showWizard}>
        <WizardDialog
          show={showWizard}
          nextWizard={WIZARD_TYPES.STARTUPS.COMMUNITY_STARTUPS}
          text="Click here to create a new startup 🚀"
        >
          <Button
            variant={showWizard ? "secondary-dark" : "primary"}
            className="z-20 relative px-10 sm:w-auto w-full"
            size="sm"
            icon={<Plus className="2xl:w-6 w-5" />}
          >
            New Startup
          </Button>
        </WizardDialog>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
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
              title="Add"
              detail="Add new"
            />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ProjectAddModal;
