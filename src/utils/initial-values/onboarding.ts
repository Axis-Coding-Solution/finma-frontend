export const onboardingIdeaClarityInitialValues = {
  problem: "",
  solution: "",
  targetedAudience: "",
  competitors: "",
};
export const onboardingCompletedInitialValues = {
  ProjectName: "",
};
export const userQuestionaryInitialValues = {
  country: "",
  professionalStatus: "",
  financialStatus: "",
  familyStatus: "",
};

export const postMessagesInitialValues = {
  content: "",
  receiverId: "",
  image:"",
  video:"",
  document: "",
};
const commonOnboardingInitialValues = {
  personalInfo: {
    firstName: "",
    lastName: "",
    country: null,
    city: null,
    dateOfBirth: undefined,
    gender: null,
    linkedInProfile: "",
  },
  profilePicture: null,
};

const currencyInitialValues = {
  amount: "0",
  currency: null,
};

export const startUpInitialValues = {
  startUpName: "",
  industry: null,
  startUpAbout: "",
  role: "",
  webLink: "",
  noOfEmp: "0",
  yearsOfOp: {
    from: 2000,
    to: 2005,
  },
  lastYearRevenue: currencyInitialValues,
  fundRaised: currencyInitialValues,
  accomplishment: "",
  companyLinkedIn: "",
};

const entrepreneurialTrackRecordInitialValues = {
  entrepTrackRecord: {
    startUps: [startUpInitialValues],
  },
};

export const onboardingInnovatorsInitialValues = {
  ...commonOnboardingInitialValues,
  professionalInfo: {
    currEmpStatus: null,
    careerBackground: [],
    skills: [],
  },
  communityInfo: {
    entrepStage: "",
    communityGoals: [],
    dedicatedHoursPerWeek: 0,
    personalBio: "",
  },
  ...entrepreneurialTrackRecordInitialValues,
};

export const onboardingExpertsInitialValues = {
  ...commonOnboardingInitialValues,
  professionalInfo: {
    currEmpType: null,
    currJobTitle: "",
    skills: [],
    companyName: "",
  },
  communityServiceOffer: {
    startUpDevModules: [],
    communityGoals: [],
    personalBio: "",
  },
  projectPreferences: {
    compensationOptions: null,
    projSelectionCriteria: null,
    projIntakeSteps: [],
  },
  rate: {
    contractualPref: null,
    currency: null,
    hourlyRate: 0,
    monthlyRate: 0,
    projStartingPrice: 0,
  },
};

export const onboardingMentorsInitialValues = {
  ...commonOnboardingInitialValues,
  professionalInfo: {
    jobTitle: "",
    companyName: "",
    industry: null,
  },
  communityServiceOffer: {
    startUpDevModules: [],
    communityGoals: [],
    dedicatedHoursPerWeek: 0,
    personalBio: "",
  },
  ...entrepreneurialTrackRecordInitialValues,
  investmentInterest: {
    ticketSize: null,
    targetIndustry: null,
    prefInvestmentInstrument: [],
    typicalInvestmentDuration: null,
    investmentEvalKPIS: [],
    investmentStrategy: null,
    prefStartUpTypes: null,
    annualStartUpInvestment: null,
    prefInvestmentRegions: [],
    postInvestmentSupport: [],
  },
};

export const termsAndConditionsInitialValues = {
  isAgreedForTerms: false,
  isAgreedForPrivacyPolicy: false,
};
