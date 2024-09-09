import { StartuptitleBar } from "@/pages/components/dashboard/my-startups";
import { IdeaValidationCard } from "@/pages/components/dashboard/my-startups/idea-validation";
import { ideaValidationContent } from "@/pages/components/dashboard/my-startups/idea-validation/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StartupIdeaValidationPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col 2xl:gap-10 gap-6">
      {/* back Button  */}
      <button
        onClick={handleBack}
        className="flex items-center 2xl:text-xl text-base font-medium text-foreground gap-2"
      >
        <ChevronLeft size={20} />
        Go Back
      </button>

      {/* Breadcrumb  */}
      <div className="flex flex-wrap items-center 2xl:gap-3 md:gap-2 gap-1 2xl:text-2xl md:text-lg text-base font-medium text-foreground">
        <span className="text-muted-foreground">My Startups</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span className="text-muted-foreground">Mad Cookies Roadmap</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span>Idea Validation</span>
      </div>

      {/* Title Card  */}
      <div>
        <StartuptitleBar />
      </div>

      {/* Idea Validation Card  */}
      <div className="flex flex-col 2xl:gap-10 gap-6">
        {ideaValidationContent && ideaValidationContent.map((item:any)=>(
          <IdeaValidationCard 
          heading={item.heading}
          subHeading={item.subHeading}
          detail={item.detail}
          validation={item.validation}
          image={item.image}
          />
        ))

        }
      </div>
    </div>
  );
};

export default StartupIdeaValidationPage;
