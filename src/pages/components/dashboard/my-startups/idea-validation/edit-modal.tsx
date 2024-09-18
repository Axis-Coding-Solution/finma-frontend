import { ColorLoader } from "@/assets/svgs";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  GradientButton,
  InputError,
  ReloadButton,
} from "@/components/ui";
import { Check, SquarePen, X } from "lucide-react";
import { TeamMembersDropdown } from "../team-members";
import { CardStatusDropdown } from "../card-status";
import { TaskActionDropdown } from "../task-action";
import { useForm } from "react-hook-form";
import { IdeaValidationInitialValues } from "@/utils/initial-values/dashboard";
import { yupResolver } from "@hookform/resolvers/yup";
import { IdeaValidationSchema } from "@/utils/validation-schemas/dashoard";
import { createFormData, errorToast, successToast } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/utils/hooks";
import { useAddIdeaValidationById } from "@/api/hooks/dashboard/idea-clarity";
import { CommunityInteraction } from "../community-interaction";

export const IdeaValidationCardEditModal = ({
  name,
}: {
  name: "problem" | "solution";
}) => {
  const modal = useModal();
  const queryClient = useQueryClient();
  const { mutateAsync } = useAddIdeaValidationById();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: IdeaValidationInitialValues(name),
    resolver: yupResolver(IdeaValidationSchema(name) as any),
  });

  // Handle form submission
  const onSubmitHandler = async (values: any) => {
    try {
      const formData = createFormData({ values, type: name });
      const response = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["/project/idea-validation"] });
      successToast(response.message);
      modal.close();
    } catch (error: any) {
      console.error("Error:", error);
      errorToast("Something went wrong while updating the project");
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-2 items-center  bg-foreground 2xl:px-6 px-4 2xl:py-2 py-1 text-background 2xl:rounded rounded-md 2xl:text-2xl text-base ">
              <SquarePen size={20} className="2xl:text-2xl text-base" />
              <span className="">Edit</span>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="text-2xl bg-info-light min-w-[1084px] 2xl:py-[52px] py-6 2xl:px-8 px-4">
          <div className="flex flex-col 2xl:gap-8 gap-6">
            {/* Team member & Card Status */}
            <div className="flex items-start 2xl:gap-10 gap-6">
              {/* Team Members  */}
              <TeamMembersDropdown />
              {/* Card status  */}
              <CardStatusDropdown />
            </div>
            {/* Edit Content  */}
            <div className="bg-background rounded 2xl:p-8 p-4 flex items-stretch justify-between  2xl:gap-24 gap-20 ">
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="flex flex-col justify-between h-full w-full"
              >
                <div>
                  <h4 className="2xl:text-[32px] leading-tight text-2xl font-semibold text-foreground capitalize">
                    Describe the {name} your startup is going to solve
                  </h4>
                  <p className="2xl:text-2xl text-sm 2xl:mt-4 mt-2">
                    120 Letter max
                  </p>
                </div>
                <div>
                  <div>
                    <textarea
                      {...register(name)}
                      className="resize-none max-h-16 overflow-auto 2xl:text-[28px] text-base 2xl:leading-8 leading-5 text-foreground border-b border-muted-foreground pb-2 focus:outline-none w-full"
                    />
                    <InputError error={errors[name]} />
                  </div>
                  <div className="grid grid-cols-3 items-center 2xl:gap-8 gap-6 2xl:mt-8 mt-6">
                    <GradientButton
                      variant="gradient"
                      className="rounded w-full"
                    >
                      Validate
                    </GradientButton>
                    <Button variant="outline" className="rounded w-full">
                      Discard
                    </Button>
                    <Button className="rounded w-full">Save</Button>
                  </div>
                </div>
              </form>
              <div className="bg-background 2xl:min-w-[305px] md:min-w-[255px] rounded shadow-lg 2xl:p-6 p-4  flex flex-col 2xl:gap-8 gap-6">
                <div className="flex items-center justify-between 2xl:gap-4 gap-2">
                  <h6 className="uppercase 2xl:text-base text-sm font-medium ">
                    The {name} Validation
                  </h6>
                  {name === "problem" ? <ReloadButton /> : <ReloadButton />}
                </div>
                <div className="flex items-center 2xl:gap-4 gap-2">
                  <img src={ColorLoader} className="2xl:w-20 w-14" />
                  <span className="2xl:text-base text-sm flex flex-col gap-1 font-medium leading-[18px]">
                    The {name} score{" "}
                    <span className="2xl:text-xl text-lg font-bold">7/10</span>
                  </span>
                </div>
                <ul className="flex flex-col 2xl:gap-7 gap-4">
                  <li className="2xl:text-xl text-base flex items-center gap-2">
                    <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
                    Urgency
                  </li>
                  <li className="2xl:text-xl text-base flex items-center gap-2">
                    <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
                    Relevance
                  </li>
                  <li className="2xl:text-xl text-base flex items-center gap-2">
                    <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
                    Relevance
                  </li>
                </ul>
              </div>
            </div>
            {/* Community & Tasks action  */}
            <div className="flex items-start justify-between 2xl:gap-10 gap-6">
              <CommunityInteraction />
              <TaskActionDropdown />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
