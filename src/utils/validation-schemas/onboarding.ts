import { string, object, date, mixed, number, array } from "@/utils/constants";

export const userQuestionarySchema = object({
  country: string().trim().label("Country").required(),
  professionalStatus: string().trim().label("Professional Status").required(),
  financialStatus: string().trim().label("Financial Status").required(),
  familyStatus: string().trim().label("Family Status").required(),
});

export const onboardingCompletedSchema = object({
  projectName: string().trim().label("Project Name").required(),
});

const commonOnboardingSchema = {
  personalInfo: object({
    firstName: string().trim().required(),
    lastName: string().trim().required(),
    country: string().trim().required(),
    city: string().trim().required(),
    dateOfBirth: date().required().max(new Date()),
    gender: string().trim().required(),
  }),
  profilePicture: mixed().required(),
};

const currencySchema = object({
  amount: number().required().typeError("Must be a number!"),
  currency: string().trim().required(),
});

const entrepreneurialTrackRecordSchema = {
  entrepTrackRecord: object({
    startUps: array().of(
      object({
        startUpName: string().trim().required(),
        industry: string().trim().required(),
        startUpAbout: string().trim().required(),
        role: string().trim().required(),
        webLink: string().trim().required(),
        noOfEmp: string().trim().required(),
        yearsOfOp: object({
          from: string().trim().required(),
          to: string().trim().required(),
        }),
        lastYearRevenue: currencySchema,
        fundRaised: currencySchema,
        accomplishment: string().trim().required(),
        companyLinkedIn: string().trim().required(),
      })
    ),
  }),
};

export const onboardingInnovatorsSchema = object({
  ...commonOnboardingSchema,
  ...entrepreneurialTrackRecordSchema,
  professionalInfo: object({
    curEmpStatus: string().trim().required(),
    careerBackground: string().trim().required(),
    skills: array().required().min(1, "Please select at least 1 option!"),
  }),
  communityInfo: object({
    entrepStage: string().trim().required(),
    communityGoals: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    dedicatedHoursPerWeek: string().trim().required(),
    personalBio: string().trim().required(),
  }),
});

export const onboardingExpertsSchema = {
  ...commonOnboardingSchema,
  professionalInfo: {
    currEmpType: string().trim().required(),
    currJobTitle: string().trim().required(),
    skills: array().required().min(1, "Please select at least 1 option!"),
    companyName: string().trim().required(),
  },
  communityServiceOffer: {
    startUpDerModules: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    communityGoals: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    personalBio: string().trim().required(),
  },
  rate: {
    contractualPref: string().trim().required(),
    currency: string().trim().required(),
    hourlyRate: number().required().typeError("Must be a number!"),
    monthlyRate: number().required().typeError("Must be a number!"),
    projStartingPrice: number().required().typeError("Must be a number!"),
  },
};

export const onboardingMentorsSchema = {
  ...commonOnboardingSchema,
  professionalInfo: {
    jobTitle: string().trim().required(),
    companyName: string().trim().required(),
    industry: string().trim().required(),
  },
  communityServiceOffer: {
    startUpDerModules: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    communityGoals: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    personalBio: string().trim().required(),
  },

  ...entrepreneurialTrackRecordSchema,
  investmentInterest: {
    ticketSize: string().trim().required(),
    targetIndustry: string().trim().required(),
    prefInvestmentInstrument: string().trim().required(),
    typicalInvestmentDuration: string().trim().required(),
    investmentEvalKPIS: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    prefStartUpTypes: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    annualStartUpInvestment: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    prefInvestmentRegions: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    postInvestmentSupport: string().trim().required(),
  },
};
