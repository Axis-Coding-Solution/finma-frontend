import { LogoAvatar } from "@/assets/svgs";
import {
  StartupTimeline,
  StartuptitleBar,
} from "@/pages/components/dashboard/my-startups";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
function StartupDetailPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      {/* back Button  */}
      <button
        onClick={handleBack}
        className="flex items-center 2xl:text-xl text-base font-medium text-foreground gap-2"
      >
        <ChevronLeft size={20} />
        Go Back
      </button>

      {/* Breadcrumb  */}
      <div className="flex items-center 2xl:gap-3 gap-2 2xl:text-2xl text-lg font-medium text-foreground">
        <span className="text-muted-foreground">My Startups</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span>Mad Cookies Roadmap</span>
      </div>

      {/* Title Card  */}
      <div>
        <StartuptitleBar />
      </div>

      {/* Timeline Content  */}
      <div>
        <StartupTimeline />
      </div>
    </>
  );
}

export default StartupDetailPage;
