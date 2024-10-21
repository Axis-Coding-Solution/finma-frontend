import { useGetStartups } from "@/api/hooks/dashboard";
import { IdeaValidationStart } from "@/assets/svgs";
import { Button } from "@/components/ui";
import { WizardDialog } from "@/components/ui/wizard-dialog";
import { FetchLoader, HeadingButton } from "@/pages/components/common";
import ProjectCard from "@/pages/components/dashboard/my-projects/card";
import ProjectAddModal from "@/pages/components/dashboard/my-projects/project-add-modal";
import { WIZARD_TYPES } from "@/utils/constants";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const MyStartupPage = () => {
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useGetStartups(filter);
  const [searchParams] = useSearchParams();
  const wizardType = String(searchParams.get("wizardType"));

  const totalProjects = data ? data?.length : 0;

  return (
    <>
      <div className="relative">
        <HeadingButton
          title="My Startups"
          subtitle={`${totalProjects} Startup${totalProjects > 1 ? "s" : ""}`}
          renderRight={<ProjectAddModal wizardType={wizardType} />}
        />
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <WizardDialog
          show={wizardType === WIZARD_TYPES.STARTUPS.ALL_STARTUPS}
          text="Here you can see all startups"
        >
          <Button
            className={
              wizardType === WIZARD_TYPES.STARTUPS.ALL_STARTUPS
                ? "z-20 relative"
                : ""
            }
            onClick={() => setFilter("all")}
            variant={
              filter === "all" ||
              (!filter && wizardType !== WIZARD_TYPES.STARTUPS.ALL_STARTUPS)
                ? "dark"
                : wizardType !== WIZARD_TYPES.STARTUPS.ALL_STARTUPS
                ? "outline"
                : "secondary-dark"
            }
            size="sm"
            rounded
          >
            All
          </Button>
        </WizardDialog>
        <WizardDialog
          show={wizardType === WIZARD_TYPES.STARTUPS.MY_STARTUPS}
          text="Here you can see your startups"
          nextWizard={WIZARD_TYPES.STARTUPS.ALL_STARTUPS}
        >
          <Button
            className={
              wizardType === WIZARD_TYPES.STARTUPS.MY_STARTUPS
                ? "z-20 relative"
                : ""
            }
            onClick={() => setFilter("my-startup")}
            variant={
              filter === "my-startup" &&
              wizardType !== WIZARD_TYPES.STARTUPS.MY_STARTUPS
                ? "dark"
                : wizardType !== WIZARD_TYPES.STARTUPS.MY_STARTUPS
                ? "outline"
                : "secondary-dark"
            }
            size="sm"
            rounded
          >
            My Startup
          </Button>
        </WizardDialog>
        <WizardDialog
          show={wizardType === WIZARD_TYPES.STARTUPS.COMMUNITY_STARTUPS}
          text="Here you can see the community startups"
          nextWizard={WIZARD_TYPES.STARTUPS.MY_STARTUPS}
        >
          <Button
            onClick={() => setFilter("community")}
            className={
              wizardType === WIZARD_TYPES.STARTUPS.COMMUNITY_STARTUPS
                ? "z-20 relative"
                : ""
            }
            variant={
              filter === "community" &&
              wizardType !== WIZARD_TYPES.STARTUPS.COMMUNITY_STARTUPS
                ? "dark"
                : wizardType !== WIZARD_TYPES.STARTUPS.COMMUNITY_STARTUPS
                ? "outline"
                : "secondary-dark"
            }
            size="sm"
            rounded
          >
            Community Startup
          </Button>
        </WizardDialog>
      </div>
      {isLoading && isLoading ? (
        <FetchLoader noMessage={false} />
      ) : (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:flex-row gap-5">
          {data && data.length > 0 ? (
            data.map((item: any, index: number) => (
              <ProjectCard key={index} {...item} />
            ))
          ) : (
            <div className="col-span-3 flex flex-col justify-center items-center">
              <img src={IdeaValidationStart} className="opacity-40" />
              <span className="font-medium">No Startup Available</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyStartupPage;
