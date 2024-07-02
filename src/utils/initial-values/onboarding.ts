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
};

const commonOnboardingInitialValues = {
  personalInfo: {
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    dateOfBirth: null,
    gender: "",
  },
  profilePicture: null,
};

const currencyInitialValues = {
  amount: 0,
  currency: "",
};

const entrepreneurialTrackRecordInitialValues = {
  entrepTrackRecord: {
    startUps: [
      {
        startUpName: "",
        industry: "",
        startUpAbout: "",
        role: "",
        webLink: "",
        noOfEmp: "",
        yearsOfOp: {
          from: "",
          to: "",
        },
        lastYearRevenue: currencyInitialValues,
        fundRaised: currencyInitialValues,
        accomplishment: "",
        companyLinkedIn: "",
      },
    ],
  },
};

export const onboardingInnovatorsInitialValues = {
  ...commonOnboardingInitialValues,
  ...entrepreneurialTrackRecordInitialValues,
  professionalInfo: {
    curEmpStatus: "",
    careerBackground: "",
    skills: [],
  },
  communityInfo: {
    entrepStage: "",
    communityGoals: [],
    dedicatedHoursPerWeek: "",
    personalBio: "",
  },
};

export const onboardingExpertsInitialValues = {
  ...commonOnboardingInitialValues,
  professionalInfo: {
    currEmpType: "",
    currJobTitle: "",
    skills: [],
    companyName: "",
  },
  communityServiceOffer: {
    startUpDerModules: [],
    communityGoals: [],
    personalBio: "",
  },
  rate: {
    contractualPref: "",
    currency: "",
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
    industry: "",
  },
  communityServiceOffer: {
    startUpDerModules: [],
    communityGoals: [],
    personalBio: "",
  },

  ...entrepreneurialTrackRecordInitialValues,
  investmentInterest: {
    ticketSize: "",
    targetIndustry: "",
    prefInvestmentInstrument: "",
    typicalInvestmentDuration: "",
    investmentEvalKPIS: [],
    prefStartUpTypes: [],
    annualStartUpInvestment: [],
    prefInvestmentRegions: [],
    postInvestmentSupport: "",
  },
};
