export const currentEmploymentStatusOptions = [
  {
    value: "Student",
    label: "Student",
  },
  {
    value: "Startup Employee",
    label: "Startup Employee",
  },
  {
    value: "Corporate Employee",
    label: "Corporate Employee",
  },
  {
    value: "Unemployed",
    label: "Unemployed",
  },
  {
    value: "Freelance",
    label: "Freelance",
  },
  {
    value: "Own an SME (Small-Medium Enterprise) ",
    label: "Own an SME (Small-Medium Enterprise) ",
  },
  {
    value: "Startup Solo-founder",
    label: "Startup Solo-founder",
  },
  {
    value: "Co-Founder at a startup",
    label: "Co-Founder at a startup",
  },
];

export const careerBackgroundOptions = [
  {
    value: "Marketing & Communications",
    label: "Marketing & Communications",
  },
  {
    value: "Design & Graphics",
    label: "Design & Graphics",
  },
  {
    value: "Development",
    label: "Development",
  },
  {
    value: "Finance & Accounting",
    label: "Finance & Accounting",
  },
  {
    value: "Human Resources",
    label: "Human Resources",
  },
  {
    value: "Consulting & Strategy",
    label: "Consulting & Strategy",
  },
  {
    value: "Entrepreneurship & Innovation",
    label: "Entrepreneurship & Innovation",
  },
];

export const skillsOptions = [
  { value: "Business Strategy", label: "Business Strategy" },
  { value: "Market Research", label: "Market Research" },
  { value: "Financial Planning", label: "Financial Planning" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Product Development", label: "Product Development" },
  { value: "SEO/SEM", label: "SEO/SEM" },
  { value: "Web Development", label: "Web Development" },
  { value: "Branding", label: "Branding" },
  { value: "Mobile App Development", label: "Mobile App Development" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "Content Marketing", label: "Content Marketing" },
  { value: "Social Media Marketing", label: "Social Media Marketing" },
  { value: "Copywriting", label: "Copywriting" },
  { value: "Legal and Compliance", label: "Legal and Compliance" },
  { value: "Fundraising", label: "Fundraising" },
  { value: "Pitch Deck Creation", label: "Pitch Deck Creation" },
  { value: "Sales Strategy", label: "Sales Strategy" },
  { value: "Operations Management", label: "Operations Management" },
  { value: "Supply Chain Management", label: "Supply Chain Management" },
  { value: "Data Analysis", label: "Data Analysis" },
  { value: "Machine Learning/AI", label: "Machine Learning/AI" },
  { value: "Cybersecurity", label: "Cybersecurity" },
  { value: "Cloud Computing", label: "Cloud Computing" },
  { value: "Human Resources", label: "Human Resources" },
  { value: "Customer Service", label: "Customer Service" },
  { value: "Project Management", label: "Project Management" },
  { value: "Agile/Scrum", label: "Agile/Scrum" },
];

export const communityGoalsOptions = [
  {
    value: "Networking with other founders",
    label: "Networking with other founders",
  },
  { value: "Seeking mentorship", label: "Seeking mentorship" },
  { value: "Gaining market insights", label: "Gaining market insights" },
  { value: "Learning new skills", label: "Learning new skills" },
  {
    value: "Finding co-founders or team members",
    label: "Finding co-founders or team members",
  },
];

const currYear = new Date().getFullYear();
export const yearsOptions: number[] = [];
for (let i = 1900; i <= currYear; i++) yearsOptions.push(i);

export const currenciesOptions = [
  {
    value: "$ USD",
    label: "$ USD",
  },
  {
    value: "€ EUR",
    label: "€ EUR",
  },
  {
    value: "¥ CNA",
    label: "¥ CNA",
  },
];

export const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Non-binary", label: "Non-binary" },
  { value: "Genderqueer", label: "Genderqueer" },
  { value: "Agender", label: "Agender" },
  { value: "Transgender", label: "Transgender" },
  { value: "Gender Fluid", label: "Gender Fluid" },
  { value: "Prefer not to say", label: "Prefer not to say" },
];

export const currentEmploymentTypeOptions = [
  { value: "I am a student", label: "I am a student" },
  {
    value: "I am looking for a Full-Time job",
    label: "I am looking for a Full-Time job",
  },
  {
    value: "I am working Full-Time and looking for a side project",
    label: "I am working Full-Time and looking for a side project",
  },
  {
    value: "I am looking for a Part-Time job",
    label: "I am looking for a Part-Time job",
  },
  {
    value: "I am a Full-Time freelancer",
    label: "I am a Full-Time freelancer",
  },
  {
    value: "I am a Part-Time freelancer",
    label: "I am a Part-Time freelancer",
  },
  {
    value: "I am part of a service agency",
    label: "I am part of a service agency",
  },
  {
    value: "I am an entrepreneur working on my own startup",
    label: "I am an entrepreneur working on my own startup",
  },
  {
    value: "I am semi-retired and looking for occasional projects",
    label: "I am semi-retired and looking for occasional projects",
  },
];

export const workCompensationOptions = [
  {
    value: "Fees (hourly/project-based)",
    label: "Fees (hourly/project-based)",
  },
  { value: "Equity", label: "Equity" },
  { value: "Reduced fees and equity", label: "Reduced fees and equity" },
  {
    value: "Reduced fees and promise to hire",
    label: "Reduced fees and promise to hire",
  },
  { value: "Revenue share", label: "Revenue share" },
  { value: "Pro bono", label: "Pro bono" },
];

export const projectSelectionCriteriaOptions = [
  {
    value: "Industry preferences (e.g., FinTech, HealthTech, EdTech, etc.)",
    label: "Industry preferences (e.g., FinTech, HealthTech, EdTech, etc.)",
  },
  {
    value: "Investment stage preferences (pre-seed, seed, Series A, etc.)",
    label: "Investment stage preferences (pre-seed, seed, Series A, etc.)",
  },
  { value: "Project scope and timeline", label: "Project scope and timeline" },
  { value: "Startup team experience", label: "Startup team experience" },
  { value: "Market potential", label: "Market potential" },
  { value: "Social impact", label: "Social impact" },
  { value: "Innovation level", label: "Innovation level" },
  { value: "Funding status", label: "Funding status" },
  { value: "Geographic location", label: "Geographic location" },
];

export const projectIntakeStepsOptions = [
  {
    value: "Discovery call → Power hours → Quotation → Contract signature",
    label: "Discovery call → Power hours → Quotation → Contract signature",
  },
  { value: "RFQ → Contract signature", label: "RFQ → Contract signature" },
  {
    value: "Initial consultation → Proposal → Contract",
    label: "Initial consultation → Proposal → Contract",
  },
  {
    value: "Needs assessment → Proposal → Agreement",
    label: "Needs assessment → Proposal → Agreement",
  },
  {
    value: "Briefing → Estimation → Approval",
    label: "Briefing → Estimation → Approval",
  },
  {
    value: "Consultation → Planning → Agreement",
    label: "Consultation → Planning → Agreement",
  },
  {
    value: "Initial meeting → Strategy session → Contract",
    label: "Initial meeting → Strategy session → Contract",
  },
];

export const contractualPreferenceOptions = [
  { value: "Hourly rate", label: "Hourly rate" },
  { value: "Fixed project price", label: "Fixed project price" },
  { value: "Milestone-based payment", label: "Milestone-based payment" },
  { value: "Advance payment required", label: "Advance payment required" },
  { value: "Retainer agreement", label: "Retainer agreement" },
  { value: "Employment contract", label: "Employment contract" },
  { value: "Performance-based pay", label: "Performance-based pay" },
];

export const entrepreneurialStageOptions = [
  {
    heading: "Early-Stage Dreamer",
    subheading: "I have a great idea and am looking to explore its potential",
  },
  {
    heading: "Aspiring Entrepreneur",
    subheading:
      "I'm eager to start a business but need guidance to get started",
  },
  {
    heading: "Startup Builder",
    subheading: "I'm developing a startup and working on its launch",
  },
  {
    heading: "Growth Seeker",
    subheading:
      "My startup is up and running, and I'm focused on scaling and growing it",
  },
  {
    heading: "Serial Entrepreneur",
    subheading: "I've started multiple businesses and aim to keep innovating",
  },
  {
    heading: "Tech Innovator",
    subheading: "I'm focused on developing cutting-edge technology solutions.",
  },
  {
    heading: "Market Strategist",
    subheading:
      "I excel at spotting market opportunities and crafting success strategies",
  },
  {
    heading: "Impact Creator",
    subheading:
      "I'm driven by creating social or environmental impact through my ventures",
  },
  {
    heading: "Creative Visionary ",
    subheading:
      "I excel at turning creative ideas into innovative business models",
  },
  {
    heading: "Regional Pioneers",
    subheading: "I'm committed to pioneering startup success in my community",
  },
];

export const IndustryOptions = [
  {
    value: "Technology & IT",
    label: "Technology & IT",
  },
  {
    value: "Consumer Goods & Services",
    label: "Consumer Goods & Services",
  },
  {
    value: "Healthcare & Life Sciences",
    label: "Healthcare & Life Sciences",
  },
  {
    value: "Industrial & Manufacturing",
    label: "Industrial & Manufacturing",
  },
  {
    value: "Energy & Utilities",
    label: "Energy & Utilities",
  },
  {
    value: "Media & Entertainment",
    label: "Media & Entertainment",
  },
  {
    value: "Real Estate & Property",
    label: "Real Estate & Property",
  },
  {
    value: "Transportation & Logistics",
    label: "Transportation & Logistics",
  },
  {
    value: "Agriculture & Food",
    label: "Agriculture & Food",
  },
  {
    value: "Environmental & Social Impact",
    label: "Environmental & Social Impact",
  },
  {
    value: "Professional Services",
    label: "Professional Services",
  },
  {
    value: "Hospitality & Tourism",
    label: "Hospitality & Tourism",
  },
  {
    value: "Education & Training",
    label: "Education & Training",
  },
  {
    value: "Telecommunications",
    label: "Telecommunications",
  },
  {
    value: "Government & Public Sector",
    label: "Government & Public Sector",
  },
  {
    value: "Miscellaneous",
    label: "Miscellaneous",
  },
];

export const StartupModulesOptions = [
  {
    value: "Idea and Problem Validation",
    label: "Idea and Problem Validation",
    values: [
      {
        value:
          "Conduct market research to identify key problems and validate them.",
        label:
          "Conduct market research to identify key problems and validate them.",
      },
      {
        value: "Perform competitor analysis to understand existing solutions.",
        label: "Perform competitor analysis to understand existing solutions.",
      },
      {
        value:
          "Create and distribute surveys to potential customers to gather feedback.",
        label:
          "Create and distribute surveys to potential customers to gather feedback.",
      },
      {
        value: "Facilitate focus groups to validate the problem statement.",
        label: "Facilitate focus groups to validate the problem statement.",
      },
      {
        value: "Develop a problem-solution fit analysis report.",
        label: "Develop a problem-solution fit analysis report.",
      },
      {
        value: "Develop a value proposition canvas.",
        label: "Develop a value proposition canvas.",
      },
      {
        value: "Create an elevator pitch.",
        label: "Create an elevator pitch.",
      },
    ],
  },
  {
    value: "Market Research and Validation",
    label: "Market Research and Validation",
    values: [
      {
        value: "Analyze market size and growth potential.",
        label: "Analyze market size and growth potential.",
      },
      {
        value: "Conduct customer interviews to validate demand.",
        label: "Conduct customer interviews to validate demand.",
      },
      {
        value: "Create a detailed customer persona based on market research.",
        label: "Create a detailed customer persona based on market research.",
      },
      {
        value:
          "Perform SWOT analysis (Strengths, Weaknesses, Opportunities, Threats).",
        label:
          "Perform SWOT analysis (Strengths, Weaknesses, Opportunities, Threats).",
      },
      {
        value: "Create and validate value proposition statements.",
        label: "Create and validate value proposition statements.",
      },
      {
        value: "Compile a comprehensive market validation report.",
        label: "Compile a comprehensive market validation report.",
      },
    ],
  },
  {
    value: "Building the MVP",
    label: "Building the MVP",
    values: [
      {
        value: "Develop a functional Minimum Viable Product (MVP).",
        label: "Develop a functional Minimum Viable Product (MVP).",
      },
      {
        value: "Create wireframes and prototypes for initial testing.",
        label: "Create wireframes and prototypes for initial testing.",
      },
      {
        value: "Implement core features for MVP testing.",
        label: "Implement core features for MVP testing.",
      },
      {
        value: "Set up and run usability tests to gather feedback.",
        label: "Set up and run usability tests to gather feedback.",
      },
      {
        value: "Set up and run usability tests to gather feedback.",
        label: "Set up and run usability tests to gather feedback.",
      },
    ],
  },
  {
    value: "Growth and User Acquisition",
    label: "Growth and User Acquisition",
    values: [
      {
        value: "Design and execute growth hacking experiments.",
        label: "Design and execute growth hacking experiments.",
      },
      {
        value: "Develop and implement user onboarding processes.",
        label: "Develop and implement user onboarding processes.",
      },
      {
        value:
          "Set up and manage user acquisition campaigns (social media, SEM, etc.).",
        label:
          "Set up and manage user acquisition campaigns (social media, SEM, etc.).",
      },
      {
        value: "Track and analyze user acquisition metrics.",
        label: "Track and analyze user acquisition metrics.",
      },
      {
        value: "Optimize user funnels to increase conversion rates.",
        label: "Optimize user funnels to increase conversion rates.",
      },
    ],
  },
  {
    value: "Design and branding",
    label: "Design and branding",
    values: [
      {
        value: "Develop brand identity and guidelines.",
        label: "Develop brand identity and guidelines.",
      },
      {
        value: "Design logos, business cards, and other brand assets.",
        label: "Design logos, business cards, and other brand assets.",
      },
      {
        value: "Create UI/UX designs for digital products.",
        label: "Create UI/UX designs for digital products.",
      },
      {
        value: "Develop wireframes and prototypes.",
        label: "Develop wireframes and prototypes.",
      },
      {
        value: "Conduct usability testing and user feedback analysis.",
        label: "Conduct usability testing and user feedback analysis.",
      },
      {
        value: "Create marketing and promotional materials.",
        label: "Create marketing and promotional materials.",
      },
    ],
  },
  {
    value: "Product Development",
    label: "Product Development",
    values: [
      {
        value: "Iteratively develop and improve product features.",
        label: "Iteratively develop and improve product features.",
      },
      {
        value:
          "Prioritize and implement high-value features based on user feedback.",
        label:
          "Prioritize and implement high-value features based on user feedback.",
      },
      {
        value: "Conduct regular product usability testing.",
        label: "Conduct regular product usability testing.",
      },
      {
        value: "Maintain a product roadmap with timelines and milestones.",
        label: "Maintain a product roadmap with timelines and milestones.",
      },
      {
        value: "Document product development cycles and outcomes.",
        label: "Document product development cycles and outcomes.",
      },
    ],
  },
  {
    value: "Business Model and Revenue Generation",
    label: "Business Model and Revenue Generation",
    values: [
      {
        value: "Develop and test different revenue models.",
        label: "Develop and test different revenue models.",
      },
      {
        value: "Conduct pricing strategy analysis and experiments.",
        label: "Conduct pricing strategy analysis and experiments.",
      },
      {
        value: "Create financial projections and revenue models.",
        label: "Create financial projections and revenue models.",
      },
      {
        value: "Implement and optimize monetization features.",
        label: "Implement and optimize monetization features.",
      },
      {
        value: "Track and report on revenue generation metrics.",
        label: "Track and report on revenue generation metrics.",
      },
    ],
  },
  {
    value: "Fundraising and Pitching",
    label: "Fundraising and Pitching",
    values: [
      {
        value: "Prepare and refine investor pitch decks.",
        label: "Prepare and refine investor pitch decks.",
      },
      {
        value: "Conduct mock pitching sessions and gather feedback.",
        label: "Conduct mock pitching sessions and gather feedback.",
      },
      {
        value: "Conduct mock pitching sessions and gather feedback.",
        label: "Conduct mock pitching sessions and gather feedback.",
      },
      {
        value: "Identify and connect with potential investors.",
        label: "Identify and connect with potential investors.",
      },
      {
        value:
          "Prepare all necessary documents for fundraising (term sheets, cap tables, etc.).",
        label:
          "Prepare all necessary documents for fundraising (term sheets, cap tables, etc.).",
      },
    ],
  },
  {
    value: "Team Building and Management",
    label: "Team Building and Management",
    values: [
      {
        value: "Develop and implement hiring strategies.",
        label: "Develop and implement hiring strategies.",
      },
      {
        value: "Facilitate team-building workshops.",
        label: "Facilitate team-building workshops.",
      },
      {
        value: "Conduct interviews and candidate assessments.",
        label: "Conduct interviews and candidate assessments.",
      },
      {
        value: "Create and manage onboarding processes for new hires.",
        label: "Create and manage onboarding processes for new hires.",
      },
      {
        value: "Develop team performance evaluation systems",
        label: "Develop team performance evaluation systems",
      },
    ],
  },
  {
    value: "Legal and Operational Setup",
    label: "Legal and Operational Setup",
    values: [
      {
        value: "Assist with incorporation and legal entity formation.",
        label: "Assist with incorporation and legal entity formation.",
      },
      {
        value: "Draft and review key legal documents (NDAs, contracts, etc.).",
        label: "Draft and review key legal documents (NDAs, contracts, etc.).",
      },
      {
        value: "Provide guidance on intellectual property protection.",
        label: "Provide guidance on intellectual property protection.",
      },
      {
        value: "Set up operational systems and processes.",
        label: "Set up operational systems and processes.",
      },
      {
        value: "Develop compliance and risk management frameworks.",
        label: "Develop compliance and risk management frameworks.",
      },
    ],
  },
  {
    value: "Customer Retention and Engagement",
    label: "Customer Retention and Engagement",
    values: [
      {
        value: "Develop and implement customer retention strategies.",
        label: "Develop and implement customer retention strategies.",
      },
      {
        value:
          "Set up customer support systems (help desk, chat support, etc.).",
        label:
          "Set up customer support systems (help desk, chat support, etc.).",
      },
      {
        value: "Track and analyze customer engagement metrics.",
        label: "Track and analyze customer engagement metrics.",
      },
      {
        value: "Design and execute loyalty programs.",
        label: "Design and execute loyalty programs.",
      },
      {
        value: "Conduct customer satisfaction surveys and report on findings.",
        label: "Conduct customer satisfaction surveys and report on findings.",
      },
    ],
  },
  {
    value: "Networking and Community Building",
    label: "Networking and Community Building",
    values: [
      {
        value: "Facilitate networking events and workshops.",
        label: "Facilitate networking events and workshops.",
      },
      {
        value: "Facilitate networking events and workshops.",
        label: "Facilitate networking events and workshops.",
      },
      {
        value: "Connect with industry leaders and potential partners.",
        label: "Connect with industry leaders and potential partners.",
      },
      {
        value: "Organize hip programs and networking sessions.",
        label: "Organize hip programs and networking sessions.",
      },
      {
        value: "Track and report on community engagement metrics.",
        label: "Track and report on community engagement metrics.",
      },
    ],
  },
];

export const CommunityGoalsOptions = [
  {
    value: "Help founders build products people love",
    label: "Help founders build products people love",
  },
  {
    value: "Mentor and guide emerging entrepreneurs",
    label: "Mentor and guide emerging entrepreneurs",
  },
  {
    value: "Contribute to the growth of innovative startups",
    label: "Contribute to the growth of innovative startups",
  },
  {
    value: "Foster a collaborative startup ecosystem",
    label: "Foster a collaborative startup ecosystem",
  },
  {
    value: "Empower startups to achieve their goals",
    label: "Empower startups to achieve their goals",
  },
  {
    value: "Facilitate sustainable business growth",
    label: "Facilitate sustainable business growth",
  },
  {
    value: "Help startups navigate early-stage challenges",
    label: "Help startups navigate early-stage challenges",
  },
  {
    value: "Contribute to social impact projects",
    label: "Contribute to social impact projects",
  },
  {
    value: "Other (please specify)",
    label: "Other (please specify)",
  },
];

export const investmentStrategyOptions = [
  {
    value: "Active involvement (e.g., board membership, mentorship)",
    label: "Active involvement (e.g., board membership, mentorship)",
  },
  {
    value: "Passive investment",
    label: "Passive investment",
  },
  {
    value: "Hands-on guidance and support",
    label: "Hands-on guidance and support",
  },
];
export const TicketSizeOptions = [
  {
    value: "Micro investments (e.g., <$25,000)",
    label: "Micro investments (e.g., <$25,000)",
  },
  {
    value: "Seed stage ($25,000 - $100,000)",
    label: "Seed stage ($25,000 - $100,000)",
  },
  {
    value: "Early-stage ($100,000 - $500,000)",
    label: "Early-stage ($100,000 - $500,000)",
  },
  {
    value: "Growth stage ($500,000+)",
    label: "Growth stage ($500,000+)",
  },
  {
    value: "Other, please specify",
    label: "Other, please specify",
  },
];
export const TargetIndustryOptions = [
  {
    value: "Technology & IT",
    label: "Technology & IT",
  },
  {
    value: "Consumer Goods & Services",
    label: "Consumer Goods & Services",
  },
  {
    value: "Healthcare & Life Sciences",
    label: "Healthcare & Life Sciences",
  },
  {
    value: "Industrial & Manufacturing",
    label: "Industrial & Manufacturing",
  },
  {
    value: "Energy & Utilities",
    label: "Energy & Utilities",
  },
  {
    value: "Media & Entertainment",
    label: "Media & Entertainment",
  },
  {
    value: "Real Estate & Property",
    label: "Real Estate & Property",
  },
  {
    value: "Transportation & Logistics",
    label: "Transportation & Logistics",
  },
  {
    value: "Agriculture & Food",
    label: "Agriculture & Food",
  },
  {
    value: "Environmental & Social Impact",
    label: "Environmental & Social Impact",
  },
  {
    value: "Professional Services",
    label: "Professional Services",
  },
  {
    value: "Hospitality & Tourism",
    label: "Hospitality & Tourism",
  },
  {
    value: "Education & Training",
    label: "Education & Training",
  },
  {
    value: "Telecommunications",
    label: "Telecommunications",
  },
  {
    value: "Government & Public Sector",
    label: "Government & Public Sector",
  },
  {
    value: "Miscellaneous",
    label: "Miscellaneous",
  },
];
export const PrefInvestmentInstrumentOptions = [
  {
    value: "Equity",
    label: "Equity",
  },
  {
    value: "Convertible notes",
    label: "Convertible notes",
  },
  {
    value: "SAFE (Simple Agreement for Future Equity)",
    label: "SAFE (Simple Agreement for Future Equity)",
  },
  {
    value: "Revenue share",
    label: "Revenue share",
  },
  {
    value: "Debt financing",
    label: "Debt financing",
  },
  {
    value: "Other, please specify",
    label: "Other, please specify",
  },
];
export const TypicalInvestmentDurationOptions = [
  {
    value: "Short-term (<1 year)",
    label: "Short-term (<1 year)",
  },
  {
    value: "Medium-term (1-3 years)",
    label: "Medium-term (1-3 years)",
  },
  {
    value: "Long-term (3+ years)",
    label: "Long-term (3+ years)",
  },
];
export const InvestmentEvalKPISOptions = [
  {
    value: "Market size",
    label: "Market size",
  },
  {
    value: "Team experience",
    label: "Team experience",
  },
  {
    value: "Traction/Revenue",
    label: "Traction/Revenue",
  },
  {
    value: "Technology/IP",
    label: "Technology/IP",
  },
  {
    value: "Other, please specify",
    label: "Other, please specify",
  },
];
export const PrefStartUpTypesOptions = [
  {
    value: "Idea stage",
    label: "Idea stage",
  },
  {
    value: "Early-stage",
    label: "Early-stage",
  },
  {
    value: "Growth-stage",
    label: "Growth-stage",
  },
  {
    value: "Mature-stage",
    label: "Mature-stage",
  },
];
export const AnnualStartUpInvestmentOptions = [
  {
    value: "1-5",
    label: "1-5",
  },
  {
    value: "6-10",
    label: "6-10",
  },
  {
    value: "11-20",
    label: "11-20",
  },
  {
    value: "20+",
    label: "20+",
  },
];
export const PrefInvestmentRegionsOptions = [
  {
    value: "North America",
    label: "North America",
  },
  {
    value: "Europe",
    label: "Europe",
  },
  {
    value: "Asia",
    label: "Asia",
  },
  {
    value: "Middle East",
    label: "Middle East",
  },
  {
    value: "Other, please specify",
    label: "Other, please specify",
  },
];
export const PostInvestmentSupportOptions = [
  {
    value: "hip",
    label: "hip",
  },
  {
    value: "Operational support",
    label: "Operational support",
  },
  {
    value: "Network access",
    label: "Network access",
  },
  {
    value: "Other, please specify",
    label: "Other, please specify",
  },
];
