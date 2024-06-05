import { cn } from "@/utils";
import { Link, Outlet, useLocation } from "react-router-dom";

const sidebarLinks = [
  {
    title: "Idea Clarity",
    to: "/onboarding/idea-clarity",
    beta: false,
  },
  {
    title: "Scalability Analysis",
    to: "/onboarding/scalability-analysis",
    beta: true,
  },
  {
    title: "Product Singularity",
    to: "/onboarding/product-singularity",
    beta: true,
  },
  {
    title: "Customer Validation",
    to: "/onboarding/customer-validation",
    beta: true,
  },
  {
    title: "Founder's ability",
    to: "/onboarding/customer-validation",
    beta: true,
  },
];

function OnboardingLayout() {
  const { pathname } = useLocation();
  return (
    <div className="rounded-lg grid grid-cols-12 lg:gap-5 gap-4">
      {/* Sidebar  */}
      <ul className="lg:col-span-3 col-span-12 text-foreground font-medium text-lg flex flex-col gap-4">
        {sidebarLinks.map((item, index) => (
          <li
            key={index}
            className={cn(
              "hover:bg-background transition rounded-md hover:text-black",
              pathname.includes(item.to)
                ? "bg-background rounded-md"
                : "text-muted-foreground"
            )}
          >
            <Link
              to={item.to}
              className="w-full lg:px-6 px-4 md:py-3 py-2 flex items-center gap-2 lg:text-base text-sm"
            >
              <span className="flex-grow">{item.title}</span>
              {item.beta && (
                <span className="bg-yellow-400 text-xs text-foreground rounded-full px-2 py-1">
                  Beta
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      {/* Content  */}
      <div className="lg:col-span-9 col-span-12 bg-background rounded-lg md:p-10 p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default OnboardingLayout;
