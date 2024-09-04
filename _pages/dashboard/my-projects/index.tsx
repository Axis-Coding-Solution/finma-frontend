import { useGetProjects } from "@/api/hooks/dashboard/myProject";
import { MainHeading } from "@/_pages/components/common";
import ProjectCard from "@/_pages/components/dashboard/my-projects/card";
import ProjectAddModal from "@/_pages/components/dashboard/my-projects/project-add-modal";

const MyProjectsPage = () => {
  const { data} = useGetProjects();

  return (
    <>
      <div>
        <MainHeading heading="My Projects" renderRight={<ProjectAddModal />} />
      </div>
      <div className="grid grid-cols-3  lg:flex-row gap-5">
        {data && data.map((item: any, index: number) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default MyProjectsPage;
