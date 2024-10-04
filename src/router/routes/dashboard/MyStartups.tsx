import { lazy } from "react";

const MyStartupPage = lazy(() => import("@/pages/dashboard/startups"));
const StartupDetailPage = lazy(
  () => import("@/pages/dashboard/startups/details")
);
const StartupIdeaValidation = lazy(
  () => import("@/pages/dashboard/startups/details/idea-validation")
);
const StartupMarketResearch = lazy(
  () => import("@/pages/dashboard/startups/details/market-research")
);
const StartupBuildingTheMVP = lazy(
  () => import("@/pages/dashboard/startups/details/building-the-mvp")
);
const StartupGrowthUserAcquisition = lazy(
  () => import("@/pages/dashboard/startups/details/growth-user-acquisition")
);
const StartupDesignAndBranding = lazy(
  () => import("@/pages/dashboard/startups/details/design-branding")
);
const StartupProductDevelopment = lazy(
  () => import("@/pages/dashboard/startups/details/product-development")
);
const StartupBusinessModelAndRevenue = lazy(
  () => import("@/pages/dashboard/startups/details/business-model-revenue")
);
const StartupFundraisingAndPitching = lazy(
  () => import("@/pages/dashboard/startups/details/fundraising-pitching")
);
const StartupTeamBuildingAndManagement = lazy(
  () => import("@/pages/dashboard/startups/details/team-building-management")
);
const StartupLegalAndOperationSetup = lazy(
  () => import("@/pages/dashboard/startups/details/legal-operation-setup")
);
const StartupCustomerRetentionAndEngagement = lazy(
  () =>
    import("@/pages/dashboard/startups/details/customer-retention-engagement")
);
const StartupNetworkingAndCommunityBuilding = lazy(
  () =>
    import("@/pages/dashboard/startups/details/networking-community-building")
);

export default [
  {
    element: <MyStartupPage />,
    path: "/dashboard/my-startups",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupDetailPage />,
    path: "/dashboard/my-startups/:id",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupIdeaValidation />,
    path: "/dashboard/my-startups/:id/idea-validation",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupMarketResearch />,
    path: "/dashboard/my-startups/:id/market-research",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupBuildingTheMVP />,
    path: "/dashboard/my-startups/:id/building-the-mvp",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupGrowthUserAcquisition />,
    path: "/dashboard/my-startups/:id/growth-the-use-acquisition",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupDesignAndBranding />,
    path: "/dashboard/my-startups/:id/design-and-branding",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupProductDevelopment />,
    path: "/dashboard/my-startups/:id/product-development",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupBusinessModelAndRevenue />,
    path: "/dashboard/my-startups/:id/business-model-and-revenue",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupFundraisingAndPitching />,
    path: "/dashboard/my-startups/:id/fundraising-and-pitching",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupTeamBuildingAndManagement />,
    path: "/dashboard/my-startups/:id/team-building-and-management",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupLegalAndOperationSetup />,
    path: "/dashboard/my-startups/:id/legal-and-operation-setup",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupCustomerRetentionAndEngagement />,
    path: "/dashboard/my-startups/:id/customer-retention-and-engagement",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupNetworkingAndCommunityBuilding />,
    path: "/dashboard/my-startups/:id/networking-and-community-building",
    meta: {
      layout: "dashboard",
    },
  },
];
