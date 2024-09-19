import { useGetStartupById } from "@/api/hooks/dashboard";
import { GoBack } from "@/pages/components/common";
import {
  StartupTimeline,
  StartupTitleBar,
} from "@/pages/components/dashboard/my-startups";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function StartupDetailPage() {
  const params = useParams();

  const startupId = params.id;

  const { data } = useGetStartupById(String(startupId));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col 2xl:gap-10 gap-6">
      {/* back Button  */}
      <GoBack />
      {/* Breadcrumb  */}
      <div className="flex items-center 2xl:gap-3 gap-1 2xl:text-2xl text-base font-medium text-foreground">
        <span className="text-muted-foreground">My Startups</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span>{data?.name}</span>
      </div>
      <StartupTitleBar data={data} />
      <StartupTimeline />
    </div>
  );
}

export default StartupDetailPage;
