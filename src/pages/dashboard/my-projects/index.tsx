import logoimage from "@/assets/images/logoimage.png"
import { MainHeading } from "@/pages/components/common";
import ProjectCard from "@/pages/components/dashboard/my-projects/card";
import ProjectAddModal from "@/pages/components/dashboard/my-projects/project-add-modal";

const MyProjectsPage = () => {
  const projectCarArray = [
    {
      image: logoimage,
      name: "Mad Cookies",
      bio: "Project Bio",
    },
    {
      image: logoimage,
      name: "Project 2",
      bio: "Project Bio",
    },
    {
      image: logoimage,
      name: "Projects 3",
      bio: "Project Bio",
    },
  ];
  return (
    <>
      <div>
        <MainHeading
          heading="My Projects"
          renderRight={<ProjectAddModal/>}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {projectCarArray.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default MyProjectsPage;
