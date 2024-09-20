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
import { errorToast, successToast } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/utils/hooks";
import {
  IDEA_VALIDATION_PROJECT_QUERY_KEY,
  IDEA_VALIDATION_QUERY_KEY,
  useSaveIdeaValidation,
  useValidateIdeaValidation,
} from "@/api/hooks/dashboard";
import { CommunityInteraction } from "../community-interaction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const IdeaValidationCardEditModal = ({
  name,
  data,
}: {
  name: "problem" | "solution";
  data: any;
}) => {
  const { id: projectId } = useParams();
  const modal = useModal();
  const queryClient = useQueryClient();
  const [response, setResponse] = useState<any>(null);
  const { mutateAsync } = useSaveIdeaValidation();
  const { mutateAsync: validateIdeaAsync } = useValidateIdeaValidation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: IdeaValidationInitialValues(name),
    resolver: yupResolver(IdeaValidationSchema(name) as any),
  });

  useEffect(() => {
    if (data) {
      setValue(name, data?.question, { shouldValidate: true });
      setResponse(data?.response);
    }
  }, [data]);

  // Handle form submission
  const onSubmitHandler = async (values: any) => {
    try {
      const res = await mutateAsync({
        statement: values[name],
        type: name,
        response,
        projectId,
      });
      queryClient.invalidateQueries({ queryKey: [IDEA_VALIDATION_QUERY_KEY] });
      queryClient.invalidateQueries({
        queryKey: [IDEA_VALIDATION_PROJECT_QUERY_KEY, projectId],
      });
      successToast(res.message);
      modal.close();
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  const validateSubmitHandler = async (values: any) => {
    try {
      const res = await validateIdeaAsync({
        statement: values[name],
        type: name,
      });
      setResponse(res.data);
      successToast(res.message);
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  const discardChanges = () => {
    setResponse(data?.response);
    setValue(name, data?.question, { shouldValidate: true });
  };
  return (
    <>
      <Dialog open={modal.show} onOpenChange={modal.setShow}>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-2 items-center  bg-foreground 2xl:px-6 px-4 2xl:py-2 py-1 text-background 2xl:rounded rounded-md 2xl:text-2xl text-base ">
              <SquarePen size={20} className="2xl:text-2xl text-base" />
              <span className="">Edit</span>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="text-2xl bg-info-light xl:min-w-[1084px] min-w-[90%] 2xl:py-[52px] py-6 2xl:px-8 px-4">
          <div className="flex flex-col 2xl:gap-8 gap-6">
            {/* Team member & Card Status */}
            <div className="flex sm:flex-row flex-col items-start 2xl:gap-10 sm:gap-6 gap-4">
              {/* Team Members  */}
              <TeamMembersDropdown type="ideaValidation" id={data?._id} />
              {/* Card status  */}
              <CardStatusDropdown
                type="ideaValidation"
                id={data?._id}
                addedStatus={data?.cardStatus}
              />
            </div>
            {/* Edit Content  */}
            <div className="bg-background rounded 2xl:p-8 p-4 flex md:flex-row flex-col items-stretch justify-between  2xl:gap-24 lg:gap-20 sm:gap-10 gap-6">
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="flex flex-col gap-4 justify-between h-full w-full"
              >
                <div>
                  <h4 className="2xl:text-[32px] leading-tight md:text-2xl text-lg font-semibold text-foreground capitalize">
                    Describe the {name} your startup is going to solve
                  </h4>
                  <p className="2xl:text-2xl md:text-sm text-xs 2xl:mt-4 mt-2">
                    120 Letter max
                  </p>
                </div>
                <div>
                  <div>
                    <textarea
                      {...register(name)}
                      className="resize-none max-h-48 overflow-auto 2xl:text-[24px] text-base 2xl:leading-7 leading-5 text-foreground border-b border-muted-foreground pb-2 focus:outline-none w-full"
                    />
                    <InputError error={errors[name]} />
                  </div>
                  <div className="grid sm:grid-cols-3 grid-cols-2  items-center 2xl:gap-8 sm:gap-6 gap-4 2xl:mt-8 mt-6">
                    <GradientButton
                      variant="gradient"
                      className="rounded w-full sm:col-span-1 col-span-2"
                      disabled={isSubmitting}
                      onClick={handleSubmit(validateSubmitHandler)}
                    >
                      Validate
                    </GradientButton>
                    <Button
                      variant="outline"
                      className="rounded w-full"
                      type="button"
                      onClick={discardChanges}
                    >
                      Discard
                    </Button>
                    <Button
                      className="rounded w-full"
                      disabled={!response || isSubmitting}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
              <div className="bg-background 2xl:min-w-[305px] md:min-w-[255px] min-w-full rounded shadow-lg 2xl:p-6 p-4  flex flex-col 2xl:gap-8 gap-6">
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
                    <span className="2xl:text-xl text-lg font-bold">
                      {response?.score ?? 0}/10
                    </span>
                  </span>
                </div>
                <ul className="flex flex-col 2xl:gap-7 gap-4">
                  <li className="2xl:text-xl text-base flex items-center gap-2">
                    {response?.validation?.urgency ? (
                      <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
                    ) : (
                      <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
                    )}
                    Urgency
                  </li>
                  <li className="2xl:text-xl text-base flex items-center gap-2">
                    {response?.validation?.relevance ? (
                      <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
                    ) : (
                      <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
                    )}
                    Relevance
                  </li>
                  <li className="2xl:text-xl text-base flex items-center gap-2">
                    {response?.validation?.evidence ? (
                      <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
                    ) : (
                      <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
                    )}
                    Evidence
                  </li>
                </ul>
              </div>
            </div>
            {/* Community & Tasks action  */}
            <div className="flex sm:flex-row flex-col items-start justify-between 2xl:gap-10 sm:gap-6 gap-4">
              <CommunityInteraction />
              <TaskActionDropdown
                type="ideaValidation"
                id={data?._id}
                addedTasks={data?.taskAction}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
