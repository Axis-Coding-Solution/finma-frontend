import { Textarea } from "@/components/_ui/textarea";
import { MainHeading } from "@/_pages/components/common";
import { StepNavigationBtn } from "@/_pages/components/common/Step-navigation-btn";
import { ideaClarityFormDataHook } from "@/store";
import { useHookstate } from "@hookstate/core";
import { IdeaClarityContextTypes } from ".";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FORM_MODE, object, string, yupResolver } from "@/utils/constants";
import { useEffect } from "react";
import { InputError } from "@/components/_ui/input-error";

const ideaClarityTargetedAudienceInitialValues = {
  targetedAudience: "",
};

function IdeaClarityTargetedAudiencePage() {
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
    defaultValues: ideaClarityTargetedAudienceInitialValues,
    resolver: yupResolver(
      object({
        targetedAudience: string()
          .trim()
          .label("Targeted Audience")
          .required()
          .min(3)
          .max(4096),
      })
    ),
  });

  useEffect(() => {
    if (formData.targetedAudience) {
      reset({
        targetedAudience: formData.targetedAudience,
      });
    }
  }, [formData.targetedAudience]);

  const onSubmitHandler = (
    values: typeof ideaClarityTargetedAudienceInitialValues
  ) => {
    formDataState.set((prev) => ({
      ...prev,
      targetedAudience: values.targetedAudience,
    }));
    navigate(resolveBasePath("competitors"));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-5"
    >
      <div>
        <div className="flex justify-end items-end text-secondary">
          <span className="text-foreground font-semibold text-2xl">3</span>/{" "}
          <span>4</span>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-5">
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-secondary"></div>
        </div>
      </div>
      <MainHeading
        heading="Targeted audience"
        paragraph="Who is the specific group of people who are currently struggling with the problem your startup aims to solve?"
      />
      <div className="text-end">
        <Textarea
          {...register("targetedAudience")}
          showIcon
          rows={10}
          autoFocus
        />
        <InputError error={errors.targetedAudience} />
      </div>
      <StepNavigationBtn prevStep={resolveBasePath("solution")} />
    </form>
  );
}

export default IdeaClarityTargetedAudiencePage;
