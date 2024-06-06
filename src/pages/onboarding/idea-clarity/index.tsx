import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";

export type IdeaClarityContextTypes = {
  navigate: NavigateFunction;
  resolveBasePath: (segment: string) => string;
};

function IdeaClarityPage() {
  const navigate = useNavigate();
  const resolveBasePath = (segment: string) =>
    `/onboarding/idea-clarity/${segment}`;

  const contextValues = { navigate, resolveBasePath };

  return <Outlet context={contextValues} />;
}

export default IdeaClarityPage;
