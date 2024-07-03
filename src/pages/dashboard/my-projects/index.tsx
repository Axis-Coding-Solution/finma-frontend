import { userAvatar1Image} from "@/assets/images";
import logoimage from "@/assets/images/logoimage.png"
import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import ProjectCard from "@/pages/components/dashboard/my-projects/card";

const MyProjectsPage = () => {
  const projectCarArray = [
    {
      image: userAvatar1Image,
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
          renderRight={<Button variant="default">+ Add new projects</Button>}
        />
      </div>
      <div className="flex gap-5">
        {projectCarArray.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default MyProjectsPage;
