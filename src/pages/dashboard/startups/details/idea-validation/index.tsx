import {
  useGetIdeaValidationByProjectId,
  useGetStartupById,
} from "@/api/hooks/dashboard";
import { GoBack } from "@/pages/components/common";
import { StartupTitleBar } from "@/pages/components/dashboard/my-startups";
import { IdeaValidationCard } from "@/pages/components/dashboard/my-startups/idea-validation";
import { ideaValidationContent } from "@/pages/components/dashboard/my-startups/idea-validation/data";
import { ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";

const StartupIdeaValidationPage = () => {
  const params = useParams();
  const startupId = params.id;
  const { data } = useGetStartupById(String(startupId));

  const { data: validationData } = useGetIdeaValidationByProjectId(
    String(startupId)
  );
console.log("qwerty", validationData)
  return (
    <div className="flex flex-col 2xl:gap-10 gap-6">
      {/* back Button  */}
      <GoBack />

      {/* Breadcrumb  */}
      <div className="flex items-center 2xl:gap-3 gap-1 2xl:text-2xl text-base font-medium text-foreground">
        <span className="text-muted-foreground">My Startups</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span className="text-muted-foreground">{data?.name}</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span>Idea Validation</span>
      </div>

      {/* Title Card  */}
      <div>
        <StartupTitleBar data={data} />
      </div>

      {/* Idea Validation Card  */}
      <div className="flex flex-col 2xl:gap-10 gap-6">
        {ideaValidationContent &&
          ideaValidationContent.map((item: any, idx: number) => (
            <IdeaValidationCard
              data={
                validationData &&
                validationData?.find((el: any) => el.type === item.name)
              }
              name={item.name}
              key={idx}
              heading={item.heading}
              subHeading={item.subHeading}
              detail={item.detail}
              validation={item.validation}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default StartupIdeaValidationPage;
