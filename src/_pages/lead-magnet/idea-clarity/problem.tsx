import { MainHeading } from "@/_pages/components/common";
import { Textarea } from "@/components/_ui/textarea";
import { StepNavigationBtn } from "@/_pages/components/common/Step-navigation-btn";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FORM_MODE, object, string, yupResolver } from "@/utils/constants";
import { InputError } from "@/components/_ui/input-error";
import { IdeaClarityContextTypes } from ".";
import { useEffect } from "react";
import { useHookstate } from "@hookstate/core";
import { ideaClarityFormDataHook } from "@/store";

const ideaClarityProblemInitialValues = {
  problem: "",
};

function IdeaClarityProblemPage() {
  const formDataState = useHookstate(ideaClarityFormDataHook);

  const formData = formDataState.get();
  const { navigate, resolveBasePath } =
    useOutletContext<IdeaClarityContextTypes>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: ideaClarityProblemInitialValues,
    resolver: yupResolver(
      object({
        problem: string().trim().label("Problem").required().min(3).max(4096),
      })
    ),
  });

  useEffect(() => {
    if (formData.problem) {
      reset({
        problem: formData.problem,
      });
    }
  }, [formData.problem]);

  const onSubmitHandler = (values: typeof ideaClarityProblemInitialValues) => {
    formDataState.set((prev) => ({ ...prev, problem: values.problem }));
    navigate(resolveBasePath("solution"));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-5"
    >
      <div>
        <div className="flex justify-end items-end text-secondary">
          <span className="text-foreground font-semibold text-2xl">1</span>/{" "}
          <span>4</span>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-5">
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-secondary"></div>
          <div className="h-2 w-full rounded-full bg-secondary"></div>
          <div className="h-2 w-full rounded-full bg-secondary"></div>
        </div>
      </div>
      <MainHeading
        heading="The Problem"
        paragraph="Do you have strong, credible evidence that the problem you are addressing exists and is significant?"
      />
      <div className="text-end">
        <Textarea {...register("problem")} showIcon  autoFocus />
        <InputError error={errors.problem} />
      </div>
      <StepNavigationBtn showPrevStep={false} />
    </form>
  );
}

export default IdeaClarityProblemPage;
