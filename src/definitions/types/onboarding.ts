import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import {
  onboardingExpertsInitialValues,
  onboardingInnovatorsInitialValues,
} from "@/utils/initial-values";

export type ExpertOnboardingValuesType = typeof onboardingExpertsInitialValues;
export type ExpertsOnboardingPropTypes = {
  control: Control<ExpertOnboardingValuesType>;
  errors: FieldErrors<ExpertOnboardingValuesType>;
  register: UseFormRegister<ExpertOnboardingValuesType>;
};

export type InnovatorsOnboardingValuesType =
  typeof onboardingInnovatorsInitialValues;

export type InnovatorsOnboardingPropTypes = {
  control: Control<InnovatorsOnboardingValuesType>;
  errors: FieldErrors<InnovatorsOnboardingValuesType>;
  register: UseFormRegister<InnovatorsOnboardingValuesType>;
};
