import { useGetProjectById } from "@/api/hooks/dashboard";
import {
  StartupTimeline,
  StartuptitleBar,
} from "@/pages/components/dashboard/my-startups";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
function StartupDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const handleBack = () => {
    navigate(-1);
  };

  const startupId = params.id;

  const { data } = useGetProjectById(String(startupId));

  const startupData = data?.data;
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
      <div className="flex items-center 2xl:gap-3 gap-2 2xl:text-2xl text-lg font-medium text-foreground">
        <span className="text-muted-foreground">My Startups</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span>{startupData?.name}</span>
      </div>

      {/* Title Card  */}
      <div>
        <StartuptitleBar  data={startupData} />
      </div>

      {/* Timeline Content  */}
      <div>
        <StartupTimeline />
      </div>
    </div>
  );
}

export default StartupDetailPage;
