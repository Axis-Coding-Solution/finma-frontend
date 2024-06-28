import { saveIdeaClarityApi } from "@/api/http";
import editNote from "@/assets/svgs/edit-note.svg";
import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import { ideaClarityFormDataHook } from "@/store";
import { errorToast, successToast } from "@/utils";
import { useHookstate } from "@hookstate/core";
import { useMutation } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { IdeaClarityContextTypes } from ".";
import { Input } from "@/components/ui/input";
import { onboardingCompletedInitialValues } from "@/utils/initial-values";
import { onboardingCompletedSchema } from "@/utils/validation-schemas/onboarding";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputError } from "@/components/ui/input-error";

function IdeaClarityCompletedPage() {
  const { navigate } = useOutletContext<IdeaClarityContextTypes>();
  const formDataState = useHookstate(ideaClarityFormDataHook);
  const ideaClarityMutation = useMutation({
    mutationFn: saveIdeaClarityApi,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingCompletedInitialValues,

    resolver: yupResolver(onboardingCompletedSchema as any),
  });
  const onSubmitHandler = async (
    values: typeof onboardingCompletedInitialValues
  ) => {
    console.log(values);
  };
  const handleSaveIdeaClarity = async () => {
    try {
      const response = await ideaClarityMutation.mutateAsync(
        formDataState.value
      );
      successToast(response.message);
      navigate("/lead-magnet/risk-score", {
        state: response.data,
      });
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <div className="py-10 flex justify-start items-center">
      <div className="w-[80%]">
        <img src={editNote} alt="" className="w-20 h-20 mb-4" />
        <MainHeading
          heading="You're ready go."
          paragraph="Based on your inputs, our AI model will analyze and calculate the overall risk and potential of your idea. Click the button below to see your evaluation results."
        />
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Input
            type="text"
            {...register("ProjectName")}
            placeholder="Give your future project a name"
            className="mt-4"
          />
          <InputError error={errors.ProjectName} />
          <Button
          type="submit"
            variant="default"
            className="mt-4"
            onClick={handleSaveIdeaClarity}
            disabled={ideaClarityMutation.isPending}
          >
            Get Your Risk Score
          </Button>
        </form>
      </div>
    </div>
  );
}

export default IdeaClarityCompletedPage;
