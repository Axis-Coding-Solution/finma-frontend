import { HeadingButton } from "@/pages/components/common";
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
      <div className="grid xl:grid-cols-3 lg:grid-cols-2   md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:flex-row gap-5">
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
