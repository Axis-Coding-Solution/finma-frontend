import { useGetStartups } from "@/api/hooks/dashboard";
import { IdeaValidationStart } from "@/assets/svgs";
import { FetchLoader, HeadingButton } from "@/pages/components/common";
import ProjectCard from "@/pages/components/dashboard/my-projects/card";
import ProjectAddModal from "@/pages/components/dashboard/my-projects/project-add-modal";

const MyStartupPage = () => {
  const { data, isLoading } = useGetStartups();
  console.log("qqqq",  data);


  const totalProjects = data ? data?.length : 0;

  return (
    <>
      <div>
        <HeadingButton
          title="My Startups"
          subtitle={`${totalProjects} project${totalProjects > 1 ? "s" : ""}`}
          renderRight={<ProjectAddModal />}
        />
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
