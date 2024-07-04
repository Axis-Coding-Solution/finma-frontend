import { string, object, number, array, date } from "@/utils/constants";

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
    firstName: string().trim().label("First Name").required(),
    lastName: string().trim().label("Last Name").required(),
    country: object().label("Country").required(),
    city: object().label("City").required(),
    dateOfBirth: date().label("Date of Birth").required().max(new Date()),
    gender: object().label("Gender").required(),
    linkedInProfile: string().trim().label("LinkedIn Profile").required(),
  }),
  // profilePicture: mixed().label("Profile picture").required(),
};

const currencySchema = object({
  amount: string().optional(),
  currency: number().required().typeError("Must be a number!"),
});

const entrepreneurialTrackRecordSchema = {
  entrepTrackRecord: object({
    startUps: array().of(
      object({
        startUpName: string().optional(),
        industry: string().optional(),
        startUpAbout: string().optional(),
        role: string().optional(),
        webLink: string().optional(),
        noOfEmp: number().required().typeError("Must be a number!"),
        yearsOfOp: object({
          from: number().required().typeError("Must be a number!"),
          to: number().required().typeError("Must be a number!"),
        }),
        lastYearRevenue: currencySchema,
        fundRaised: currencySchema,
        accomplishment: string().optional(),
        companyLinkedIn: string().optional(),
      })
    ),
  }),
};

export const onboardingInnovatorsSchema = object({
  ...commonOnboardingSchema,
  professionalInfo: object({
    currEmpStatus: object().label("Current employment status").required(),
    careerBackground: array().label("Career background").required().min(1),
    skills: array().label("Skills").required().min(1),
  }),
  communityInfo: object({
    entrepStage: string().trim().label("Entrepreneurial stage").required(),
    communityGoals: array().label("Community goals").required().min(1),
    dedicatedHoursPerWeek: number().required().typeError("Must be a number!"),
    personalBio: string().trim().optional(),
  }),
  ...entrepreneurialTrackRecordSchema,
});

export const onboardingExpertsSchema = object({
  ...commonOnboardingSchema,
  professionalInfo: object({
    currEmpType: object().label("Current employment type").required(),
    currJobTitle: string().trim().label("Current job title").required(),
    skills: array().required().label("Skills").min(1),
    companyName: string().optional(),
  }),
  communityServiceOffer: object({
    startUpDevModules: array().label("Startup dev modules").required().min(1),
    communityGoals: array().label("Community goals").required().min(1),
    personalBio: string().optional().trim(),
  }),

  projectPreferences: object({
    compensationOptions: object().optional().nullable(),
    projSelectionCriteria: object().optional().nullable(),
    projIntakeSteps: array().optional(),
  }),
  rate: object({
    contractualPref: object().optional().nullable(),
    currency: string().optional().trim(),
    hourlyRate: number().required().typeError("Must be a number!"),
    monthlyRate: number().required().typeError("Must be a number!"),
    projStartingPrice: number().required().typeError("Must be a number!"),
  }),
});

export const onboardingMentorsSchema = {
  ...commonOnboardingSchema,
  professionalInfo: {
    jobTitle: string().trim().required(),
    companyName: string().trim().required(),
    industry: string().trim().required(),
  },
  communityServiceOffer: {
    startUpDerModules: array().required().min(1),
    communityGoals: array().required().min(1),
    personalBio: string().trim().required(),
  },

  ...entrepreneurialTrackRecordSchema,
  investmentInterest: {
    ticketSize: string().trim().required(),
    targetIndustry: string().trim().required(),
    prefInvestmentInstrument: string().trim().required(),
    typicalInvestmentDuration: string().trim().required(),
    investmentEvalKPIS: array().required().min(1),
    prefStartUpTypes: array().required().min(1),
    annualStartUpInvestment: array().required().min(1),
    prefInvestmentRegions: array().required().min(1),
    postInvestmentSupport: string().trim().required(),
  },
};
