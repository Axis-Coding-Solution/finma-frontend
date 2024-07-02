import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { onboardingExpertsInitialValues } from "@/utils/initial-values";

export type ExpertOnboardingValuesType = typeof onboardingExpertsInitialValues;
export type ExpertsOnboardingPropTypes = {
  control: Control<ExpertOnboardingValuesType>;
  errors: FieldErrors<ExpertOnboardingValuesType>;
  register: UseFormRegister<ExpertOnboardingValuesType>;
};
