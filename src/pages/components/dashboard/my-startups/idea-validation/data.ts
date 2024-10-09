import {
  IdeaValidationProblemInfo,
  IdeaValidationSolutionInfo,
} from "@/assets/svgs";

export const ideaValidationContent = [
  {
    name: "problem",
    heading: "problem",
    validation: "problem",
    image: IdeaValidationProblemInfo,
    notes: [
      {
        title: "Urgency",
        note: "Addressing this problem is urgent for the target audience, as it impacts their efficiency and overall success.",
        validationKey: "urgency",
      },
      {
        title: "Relevance",
        note: "The problem should be highly relevant in today's market, affecting a significant number of potential users",
        validationKey: "relevance",
      },
      {
        title: "Evidence",
        note: "The user have provided strong evidence from multiple sources (surveys, studies, interviews) validating the existence and importance of the problem.",
        validationKey: "evidence",
      },
    ],
  },
  {
    name: "solution",
    heading: "solution",
    image: IdeaValidationSolutionInfo,
    notes: [
      {
        title: "Effectiveness",
        note: "The solution has been tested and shown to effectively address the problem, with measurable improvements.",
        validationKey: "effectiveness",
      },
      {
        title: "Innovation",
        note: "The solution stands out due to its innovative approach, offering unique features that are not commonly available.",
        validationKey: "innovation",
      },
      {
        title: "Feasibility",
        note: "The solution is realistic and achievable with your current resources and expertise.",
        validationKey: "feasibility",
      },
    ],
  },
];
