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
    firstName: string().trim().label("First Name").required(),
    lastName: string().trim().label("Last Name").required(),
    country: string().trim().label("Country").required(),
    city: string().trim().label("City").required(),
    dateOfBirth: date().label("Date of Birth").required().max(new Date()),
    gender: string().trim().label("Gender").required(),
    linkedInProfile: string().trim().label("LinkedIn Profile").required(),
  }),
  profilePicture: mixed().label("Profile Picture").required(),
};

const currencySchema = object({
  amount: number().optional().typeError("Must be a number!"),
  currency: string().optional().trim()
});

const entrepreneurialTrackRecordSchema = {
  entrepTrackRecord: object({
    startUps: array().of(
      object({
        startUpName: string().optional().trim(),
        industry: string().optional().trim(),
        startUpAbout: string().optional().trim(),
        role: string().optional().trim(),
        webLink: string().optional().trim(),
        noOfEmp: string().optional().trim(),
        yearsOfOp: object({
          from: string().optional().trim(),
          to: string().optional().trim(),
        }),
        lastYearRevenue: currencySchema,
        fundRaised: currencySchema,
        accomplishment: string().optional().trim(),
        companyLinkedIn: string().optional().trim(),
      })
    ),
  }),
};

export const onboardingInnovatorsSchema = object({
  ...commonOnboardingSchema,
  ...entrepreneurialTrackRecordSchema,
  professionalInfo: object({
    curEmpStatus: string().trim().label("Current employment status").required(),
    careerBackground: string().trim().label("Career background").required(),
    skills: array().optional().min(1, "Please select at least 1 option!"),
  }),
  communityInfo: object({
    entrepStage: string().trim().label("Entrepreneurial stage").required(),
    communityGoals: array().required()
      .min(1, "Please select at least 1 option!"),
    dedicatedHoursPerWeek: string().trim().optional(),
    personalBio: string().trim().optional(),
  }),
});

export const onboardingExpertsSchema = object({
  ...commonOnboardingSchema,
  professionalInfo: object({
    currEmpType: string().trim().label("Current employment type").required(),
    currJobTitle: string().trim().label("Current job title").required(),
    skills: array().required().label("Skills").min(1, "Please select at least 1 option!"),
    companyName: string().trim().label("Company name").required(),
  }),
  communityServiceOffer: object({
    startUpDevModules: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    communityGoals: array()
      .required()
      .min(1, "Please select at least 1 option!"),
    personalBio: string().optional().trim()
  }),
  
  rate: object({
    contractualPref: string().optional().trim(),
    currency: string().optional().trim(),
    hourlyRate: number().required().typeError("Must be a number!"),
    monthlyRate: number().required().typeError("Must be a number!"),
    projStartingPrice: number().required().typeError("Must be a number!"),
  })});


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
