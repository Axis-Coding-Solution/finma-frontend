import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import {
  onboardingExpertsInitialValues,
  onboardingInnovatorsInitialValues,
  onboardingMentorsInitialValues,
} from "@/utils/initial-values";

export type InnovatorsOnboardingValuesType =
  typeof onboardingInnovatorsInitialValues;
export type InnovatorsOnboardingPropTypes = {
  control: Control<InnovatorsOnboardingValuesType>;
  errors: FieldErrors<InnovatorsOnboardingValuesType>;
  register: UseFormRegister<InnovatorsOnboardingValuesType>;
};

export type ExpertOnboardingValuesType = typeof onboardingExpertsInitialValues;
export type ExpertsOnboardingPropTypes = {
  control: Control<ExpertOnboardingValuesType>;
  errors: FieldErrors<ExpertOnboardingValuesType>;
  register: UseFormRegister<ExpertOnboardingValuesType>;
};

export type MentorsOnboardingValuesType = typeof onboardingMentorsInitialValues;
export type MentorsOnboardingPropTypes = {
  control: Control<MentorsOnboardingValuesType>;
  errors: FieldErrors<MentorsOnboardingValuesType>;
  register: UseFormRegister<MentorsOnboardingValuesType>;
};
