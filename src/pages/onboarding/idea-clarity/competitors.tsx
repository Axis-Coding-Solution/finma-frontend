import { Textarea } from "@/components/ui/textarea";
import { MainHeading } from "@/pages/components/common";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";
import { IdeaClarityContextTypes } from ".";
import { useOutletContext } from "react-router-dom";
import { useHookstate } from "@hookstate/core";
import { ideaClarityFormDataHook } from "@/store";
import { useForm } from "react-hook-form";
import { FORM_MODE, object, string, yupResolver } from "@/utils/constants";
import { useEffect } from "react";
import { InputError } from "@/components/ui/input-error";

const ideaClarityCompetitorsInitialValues = {
  competitors: "",
};

function IdeaClarityCompetitorsPage() {
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
    defaultValues: ideaClarityCompetitorsInitialValues,
    resolver: yupResolver(
      object({
        competitors: string()
          .trim()
          .label("Competitors")
          .required()
          .min(3)
          .max(4096),
      })
    ),
  });

  useEffect(() => {
    if (formData.competitors) {
      reset({
        competitors: formData.competitors,
      });
    }
  }, [formData.competitors]);

  const onSubmitHandler = (
    values: typeof ideaClarityCompetitorsInitialValues
  ) => {
    formDataState.set((prev) => ({
      ...prev,
      competitors: values.competitors,
    }));
    navigate(resolveBasePath("completed"));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-5"
    >
      <div>
        <div className="flex justify-end items-end text-secondary">
          <span className="text-foreground font-semibold text-2xl">4</span>/{" "}
          <span>4</span>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-5">
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
        </div>
      </div>
      <MainHeading
        heading="Competitors"
        paragraph="Who are your direct competitors, and what makes your solution stand out?"
      />
      <div className="text-end">
        <Textarea {...register("competitors")} showIcon rows={10} autoFocus />
        <InputError error={errors.competitors} />
      </div>
      <StepNavigationBtn
        showNextStep={false}
        prevStep="/onboarding/idea-clarity/targeted-audience"
      />
    </form>
  );
}

export default IdeaClarityCompetitorsPage;
