import { string, object } from "@/utils/constants";
import { mixed } from "yup";

export const userQuestionarySchema = object({
  country: string().trim().label("Country").required(),
  professionalStatus: string().trim().label("Professional Status").required(),
  financialStatus: string().trim().label("Financial Status").required(),
  familyStatus: string().trim().label("Family Status").required(),
});

export const onboardingExpertsSchema = object({
  firstName: string().trim().label("First Name").required(),
  lastName: string().trim().label("Last Name").required(),
  country: string().trim().label("Country").required(),
  city: string().trim().label("City").required(),
  myCurrentPosition: string().trim().label("My Current Position").required(),
  areaOfExpertise: string().trim().label("Area Of Expertise").required(),
  whatICanDo: string().trim().label("What I Can Do").required(),
  myGoalsIsTo: string().trim().label("My Goals Is To").required(),
  workCompensationsOptions: string()
    .trim()
    .label("Work Compensation Options")
    .required(),
  projectSelectionProcess: string()
    .trim()
    .label("Project Selection Process")
    .required(),
  projectIntakeProcess: string()
    .trim()
    .label("Project Intake Process")
    .required(),
  projectEngagementPreference: string()
    .trim()
    .label("Project Engagement Preference")
    .required(),
  currency: string().trim().label("Currency").required(),
  discoveryCall: string().trim().label("Discovery Call").required(),
  consultation: string().trim().label("Consultation").required(),
  delivery: string().trim().label("Delivery").required(),
  profilePicture: mixed().label("Profile Photo").required(),
});
