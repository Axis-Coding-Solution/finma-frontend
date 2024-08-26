import { HeadingButton } from "@/pages/components/common";
import ProjectAddModal from "@/pages/components/dashboard/my-projects/project-add-modal";
import ProjectCard from "@/pages/components/dashboard/my-projects/card";

const startupOptions = [
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "Completed",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "In progress",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "No started",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "Completed",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "In progress",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "No started",
  },
];

const MyProjectsPage = () => {
  return (
    <>
      <div>
        <HeadingButton
          title="My Startups"
          subtitle="8 project"
        />
      </div>
      <div className="grid grid-cols-3  lg:flex-row gap-5">
        {startupOptions &&
          startupOptions.map((item: any, index) => (
            <ProjectCard
              key={index}
              name={item.name}
              category={item.category}
              status={item.status}
            />
          ))}
      </div>
    </>
  );
};

export default MyProjectsPage;
