import { communityGoals } from "@/data/dashboard/innovators";
// import CommunityServiceOffer from "@/pages/components/onboarding/experts/community-service-offer";

export const onboardingIdeaClarityInitialValues = {
  problem: "",
  solution: "",
  targetedAudience: "",
  competitors: "",
};
export const onboardingCompletedInitialValues={
  ProjectName:"",
}
export const userQuestionaryInitialValues = {
  country: "",
  professionalStatus: "",
  financialStatus: "",
  familyStatus: "",
};
// export const onboardingExpertsInitialValues = {
//   firstName: "",
//   lastName: "",
//   country: "",
//   city: "",
//   myCurrentPosition: "",
//   areaOfExpertise: "",
//   whatICanDo: "",
//   myGoalsIsTo: "",
//   workCompensationsOptions: "",
//   projectSelectionProcess: "",
//   projectIntakeProcess: "",
//   projectEngagementPreference: "",
//   currency: "",
//   discoveryCall: "",
//   consultation: "",
//   delivery: "",
//   profilePicture: null,
// };

export const postMessagesInitialValues = {
  content: "",
  receiverId: "",
};

export const onboardingInnovatorsInitialValues = {
  personalInfo: {
    firstName: "",
    lastName: "",
    dateOfBirth: undefined,
    gender: "",
    country: "",
    city: "",
    linkedInProfile:"",
  },

  professionalInfo: {
    currentEmploymentStatus: "",
    careerBackground: "",
    skills: "",
  },

  communityInformation : {
    entrepreneurialStage:"",
    communityGoals:"",
    dedicateToYourVenture:"",
    personalBio:"",
      },

      entrepreneurialTrackRecord:
      {

        nameOfStratUp:"",
        industry:"",
        aboutTheStartup:"",
        yourRole:"",
        websiteLink:"",
        numberOfEmployee:"",
        yearsOfOperations:undefined,
        lastYearRevenue:"",
        accomplishment :"",
        companyLinkedIn:"",

      },
  profilePicture: null,
};

export const onboardingExpertsInitialValues = {
  personalInfo: {
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    currentPosition: "",
  },
  professionalInfo: {
    employmentType: "",
    jobTitle: "",
    skills: "",
    companyName:""
  },
  communityServiceOffer: {
    startUpDevelopmentModule: "",
    communityGoals: "",
    personalBio:"" ,
  },
  
  projectPreference: {
    workCompensationsOptions: "",
    projectSelectionCriteria: "",
    projectIntakeSteps:"" ,
  },
  rate: {
    contractualPreference: "",
    currency: "",
    hourlyRate: "",
    monthlyRate: "",
    projectStartingPrice: "",
  },

  profilePicture: null,
};
