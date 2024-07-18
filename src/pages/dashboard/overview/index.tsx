import { useGetIdeaClarityProject } from "@/api/hooks/dashboard/idea-clarity";
import { SeeEye } from "@/assets/svgs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import IdeaClarityCard from "@/pages/components/dashboard/idea-clarity";
import LockedCard from "@/pages/components/dashboard/locked-card";
import { IdeaClarityModal } from "@/pages/components/dashboard/overview/idea-clarity-modal";
import { X } from "lucide-react";
import { useParams } from "react-router-dom";

function OverviewPage() {
  // const [data, setData] = useState<any>(null);
  const { id = '' } = useParams();
  const { data } = useGetIdeaClarityProject(id)
  // const getProjectById = async () => {
  //   try {
  //     const response = await get(`/idea-clarity/project/${id}`);

  //     setData(response.data.data);
  //     console.log("data", data);
  //     console.log("🚀 ~ getProjectById ~ response:", response.data.data.name);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (id) {
  //     getProjectById();
  //   }
  // }, [id]);

  const lockedCardArray = [
    {
      title: "Market Research and Validation",
    },
    {
      title: "Building the MVP",
    },
    {
      title: "Growth and User Acquisition ",
    },
    {
      title: "Design and branding ",
    },
    {
      title: "Product Development",
    },
    {
      title: "Business Model and Revenue Generation",
    },
    {
      title: "Fundraising and Pitching",
    },
    {
      title: "Team Building and Management",
    },
    {
      title: "Legal and Operational Setup",
    },
    {
      title: "Customer Retention and Engagement",
    },
    {
      title: "Networking and Community Building",
    },
  ];

  const idesClarityCardArray = [
    {
      badgeText: "Good",
      badgeColor: "success",
      title: "Problem",
      description: "Strong evidence from multiple sources",
    },
    {
      badgeText: "Weak",
      badgeColor: "destructive",
      title: "Solution",
      description: "Strong is untested or has shown poor results",
    },
    {
      badgeText: "Good",
      badgeColor: "success",
      title: "Audience",
      description: "Broadly defined target audience with some details",
    },
    {
      badgeText: "Moderate",
      badgeColor: "info",
      title: "Competitors",
      description: "Some direct competitors, moderate differentiation.",
    },
  ];

  return (
    <>
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
        <div className="flex flex-col md:flex-row md:gap-3">
          <div className="flex flex-col">
            <h1 className="text-sm text-muted-foreground">Project Name</h1>

            <h1 className="text-xl font-bold">{data?.name || ""}</h1>
          </div>
          <div className="flex flex-col ">
            <h1 className="md:text-sm text-muted-foreground">Project Status</h1>
            <span className="font-semibold md:text-xl">
              {data?.status || ""}
            </span>
          </div>
        </div>
        <Alert className="w-auto ">
          <AlertDescription>
            <div className="flex items-center gap-2 text-md font-semibold">
              <img src={SeeEye} alt="" />
              <span>
                <span className="text-info">Sam </span>
                is reviewing your scorecard
              </span>
              <Button variant="ghost" className="p-2 md:ml-8 ml-2 group">
                <X className="text-secondary group-hover:text-info" />
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
      <div className="mt-5 rounded-2xl bg-muted p-5">
        <div className="flex md:flex-row flex-col justify-between md:items-center items-start text-foreground font-medium">
          <h6 className="text-lg w-32">Idea Clarity</h6>
          <IdeaClarityModal data={data} />
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {idesClarityCardArray.map((item) => (
            <IdeaClarityCard
              badgeText={item.badgeText}
              badgeColor={item.badgeColor as "success" | "destructive" | "info"}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {lockedCardArray.map((item) => (
          <LockedCard key={item.title} title={item.title} />
        ))}
      </div>
    </>
  );
}

export default OverviewPage;
