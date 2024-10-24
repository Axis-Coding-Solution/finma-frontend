import { useGetStartupCardStatus } from "@/api/hooks/dashboard";
import { WizardDialog } from "@/components/ui/wizard-dialog";
import { cn } from "@/utils";
import { WIZARD_TYPES } from "@/utils/constants";
import { Link, useParams, useSearchParams } from "react-router-dom";

interface StartupTimelineCardProps {
  idx: number;
  heading: string;
  subHeading: string;
  detail: string;
  image: string;
  totalTask: number;
  completedTask: number;
  type: string;
  direction: string;
  to: string;
}

export const StartupTimelineCard: React.FC<StartupTimelineCardProps> = ({
  idx,
  heading,
  subHeading,
  detail,
  image,
  direction,
  type,
  to,
}) => {
  const { id: projectId } = useParams();
  const [searchParams] = useSearchParams();
  const wizardType = String(searchParams.get("wizardType"));
  const showWizard =
    wizardType === WIZARD_TYPES.STARTUPS.IDEA_VALIDATION.MAIN_CARD;

  const { data: status } = useGetStartupCardStatus({
    id: projectId as string,
    type: type,
  });

  return (
    <div className={cn("relative", idx === 0 && "!mt-0")}>
      <WizardDialog
        show={showWizard && type === "ideaValidation"}
        text="Click here to create a idea validation"
      >
        <Link
          to={
            localStorage.getItem("hasVisited")
              ? to
              : `${to}?wizardType=startups-idea-validation-edit-problem`
          }
        >
          <div
            className={cn(
              "2xl:p-5 p-4 rounded w-full relative",
              showWizard && type === "ideaValidation"
                ? "z-30 !bg-secondary-dark"
                : "bg-info-light"
            )}
          >
            <div className="bg-background rounded 2xl:py-5 py-4 2xl:px-3 px-2">
              <h4 className="text-foreground 2xl:text-[32px] sm:text-2xl text-xl font-semibold mb-2">
                {heading}
              </h4>
              <span className="text-muted-text 2xl:text-lg text-sm  2xl:leading-6 leading-5">
                {subHeading}
              </span>
              <div className="flex items-start gap-4">
                <span className="text-muted-text 2xl:text-lg text-sm 2xl:leading-6 leading-5">
                  {detail}
                </span>
                <figure className="2xl:min-w-48 2xl:h-48 min-w-32 h-32">
                  <img src={image} className="w-full h-full" alt="" />
                </figure>
              </div>
              <div>
                <div
                  className={cn(
                    "py-1 2xl:px-6 px-4 text-foreground rounded-full max-w-max 2xl:text-lg text-sm",
                    status?.count === 2 ? "bg-secondary-dark" : "bg-secondary"
                  )}
                >
                  {status?.count === 2
                    ? "Tasks Completed"
                    : `${status?.count ?? 0} / 2 Tasks Completed`}
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex justify-center">
            <div className=" 2xl:w-[30px] w-6  h-10 bg-secondary mx-auto"></div>
          </div>
          <div
            className={`bg-secondary w-10 h-6 absolute md:block hidden  top-1/2 ${
              direction == "right" ? "-right-10" : "-left-10"
            } transform -translate-y-1/2 `}
          ></div>
        </Link>
      </WizardDialog>
    </div>
  );
};
