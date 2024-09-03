import { LogoAvatar } from "@/assets/svgs";
import { StartupTimeline } from "@/pages/components/dashboard/my-startups";
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
      <div className="flex items-center 2xl:text-xl text-base font-medium text-foreground gap-2">
        <ChevronLeft size={20} />
        Go Back
      </div>

      {/* Breadcrumb  */}
      <button
        onClick={handleBack}
        className="flex items-center 2xl:gap-3 gap-2 2xl:text-2xl text-lg font-medium text-foreground"
      >
        <span className="text-muted-foreground">My Startups</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span>Mad Cookies Roadmap</span>
      </button>

      {/* Title Card  */}
      <div className="bg-background px-6 py-4 shadow rounded flex items-start  2xl:gap-10 gap-6 justify-between">
        {/* Page title  */}
        <div className="">
          <div className="flex items-center gap-3">
            <img src={LogoAvatar} className="w-16" />
            <div className="flex flex-col gap-1">
              <h4 className="2xl:text-[28px] text-lg font-semibold text-foreground">
                Mad Cookies
              </h4>
              <p className="text-base text-muted-text">
                All for Freedom. Freedom for All.
              </p>
            </div>
          </div>
        </div>
        {/* Validate name  */}
        <div className="">
          <div className="flex gap-2">
            <div className="min-w-2 h-2 rounded-full bg-green mt-2"></div>
            <span className="text-muted-foreground 2xl:text-base text-sm leading-6">
              Validated by{" "}
              <span className="text-info">
                Allan Durr, Thomas Dalle, Heather Marx
              </span>{" "}
              on 20 Aug 2023
            </span>
          </div>
        </div>
        {/* Status  */}
        <div className="">
          <div className="flex flex-col gap-2">
            <h6 className="text-primary-disabled text-base">Status</h6>
            <div className="max-w-max bg-secondary py-1 px-6 text-foreground 2xl:text-lg text-sm rounded">
              0/200 Tasks Completed
            </div>
          </div>
        </div>
        {/* Team  */}
        <div className="">
          <div className="flex flex-col gap-2">
            <h6 className="text-primary-disabled text-base">Team</h6>
            <div className="flex items-center relative">
              <div className="bg-[#FEA946] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                AG
              </div>
              <div className="bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                VH
              </div>
              <div className="bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                VH
              </div>
              <div className="bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                VH
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Content  */}
      <div>
        <StartupTimeline/>
      </div>
    </>
  );
}

export default StartupDetailPage;
