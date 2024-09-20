import { useGetStartups } from "@/api/hooks/dashboard";
import { FetchLoader, HeadingButton } from "@/pages/components/common";
import ProjectCard from "@/pages/components/dashboard/my-projects/card";
import ProjectAddModal from "@/pages/components/dashboard/my-projects/project-add-modal";

const MyStartupPage = () => {
  const { data, isLoading } = useGetStartups();

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
        <FetchLoader />
      ) : (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:flex-row gap-5">
          {data && data.length > 0 ? (
            data.map((item: any, index: number) => (
              <ProjectCard key={index} {...item} />
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              No Startup Available!
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyStartupPage;
