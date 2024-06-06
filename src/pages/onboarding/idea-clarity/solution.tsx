import { Textarea } from "@/components/ui/textarea";
import { MainHeading } from "@/pages/components/common";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";
import { useHookstate } from "@hookstate/core";
import { ideaClarityFormDataHook } from "@/store";
import { useForm } from "react-hook-form";
import { FORM_MODE, object, string, yupResolver } from "@/utils/constants";
import { useOutletContext } from "react-router-dom";
import { IdeaClarityContextTypes } from ".";
import { useEffect } from "react";
import { InputError } from "@/components/ui/input-error";

const ideaClaritySolutionInitialValues = {
  solution: "",
};

function IdeaClaritySolutionPage() {
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
    defaultValues: ideaClaritySolutionInitialValues,
    resolver: yupResolver(
      object({
        solution: string().trim().label("Solution").required().min(3).max(4096),
      })
    ),
  });

  useEffect(() => {
    if (formData.solution) {
      reset({
        solution: formData.solution,
      });
    }
  }, [formData.solution]);

  const onSubmitHandler = (values: typeof ideaClaritySolutionInitialValues) => {
    formDataState.set((prev) => ({ ...prev, solution: values.solution }));
    navigate(resolveBasePath("targeted-audience"));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-5"
    >
      <div>
        <div className="flex justify-end items-end text-secondary">
          <span className="text-foreground font-semibold text-2xl">2</span>/{" "}
          <span>4</span>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-5">
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-secondary"></div>
          <div className="h-2 w-full rounded-full bg-secondary"></div>
        </div>
      </div>
      <MainHeading
        heading="The Solution"
        paragraph="Has your solution been tested, and does it show clear evidence of effectively solving the problem?"
      />
      <div className="text-end">
        <Textarea {...register("solution")} showIcon rows={10} autoFocus />
        <InputError error={errors.solution} />
      </div>
      <StepNavigationBtn prevStep="/onboarding/idea-clarity/problem" />
    </form>
  );
}
export default IdeaClaritySolutionPage;
