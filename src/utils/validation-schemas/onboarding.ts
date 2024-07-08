import {
  string,
  object,
  number,
  array,
  date,
  boolean,
} from "@/utils/constants";

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
    dateOfBirth: date().label("Date of Birth").typeError("Must be a valid date!").required().max(new Date(), "Must be a past date date!"),
    gender: object().label("Gender").required(),
    linkedInProfile: string().trim().label("LinkedIn Profile").matches(
      /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm,
      'Enter correct url!'
  ).required(),
  }),
  // profilePicture: mixed().label("Profile picture").required(),
};

const currencySchema = object({
  amount: number().required().positive("Must be a positive number!").typeError("Must be a number!"),
  currency: object().optional().nullable(),
});

const entrepreneurialTrackRecordSchema = {
  entrepTrackRecord: object({
    startUps: array().of(
      object({
        startUpName: string().optional(),
        industry: object().optional().nullable(),
        startUpAbout: string().optional(),
        role: string().optional(),
        webLink: string().optional(),
        noOfEmp: number().required().positive("Must be a positive number!").typeError("Must be a number!"),
        yearsOfOp: object({
          from: number().required().typeError("Must be a number!"),
          to: number().required().typeError("Must be a number!"),
        }),
        lastYearRevenue: currencySchema,
        fundRaised: currencySchema,
        accomplishment: string().optional(),
        companyLinkedIn: string().trim().label("LinkedIn Profile").matches(
          /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm,
          'Enter correct url!'
      ).required(),
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
    currency: object().optional().nullable(),
    hourlyRate: number().required().positive("must be a positive number!").typeError("Must be a number!"),
    monthlyRate: number().required().positive("must be a positive number!").typeError("Must be a number!"),
    projStartingPrice: number().required().positive("must be a positive number!").typeError("Must be a number!"),
  }),
});

export const onboardingMentorsSchema = object({
  ...commonOnboardingSchema,
  professionalInfo: object({
    jobTitle: string().label("Job Title").trim().required(),
    companyName: string().label("Company Name").trim().required(),
    industry: object().label("Industry").required(),
  }),
  communityServiceOffer: object({
    startUpDevModules: array()
      .label("Startup Development Modules")
      .required()
      .min(1),
    communityGoals: array().label("Community Goals").required().min(1),
    hoursPerWeek: number().label("Hours per week").positive("Must be a positive number!").typeError("Must be a number!"),
    personalBio: string().optional().trim(),
  }),

  ...entrepreneurialTrackRecordSchema,
  investmentInterest: object({
    ticketSize: object().optional().nullable(),
    targetIndustry: object().optional().nullable(),
    prefInvestmentInstrument: array().optional(),
    typicalInvestmentDuration: object().optional().nullable(),
    investmentEvalKPIS: array().optional(),
    investmentStrategy: object().optional().nullable(),
    prefStartUpTypes: object().optional().nullable(),
    annualStartUpInvestment: object().optional().nullable(),
    prefInvestmentRegions: array().optional(),
    postInvestmentSupport: array().optional(),
  }),
});

export const termsAndConditionsSchema = object({
  isAgreedForTerms: boolean()
    .required()
    .isTrue("Please agree with terms and conditions!"),
  isAgreedForPrivacyPolicy: boolean()
    .required()
    .isTrue("Please agree with privacy policy!"),
});
