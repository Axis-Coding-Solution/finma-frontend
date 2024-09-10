import { useGetProjects } from "@/api/hooks/dashboard";
import { HeadingButton } from "@/pages/components/common";
import ProjectCard from "@/pages/components/dashboard/my-projects/card";
import ProjectAddModal from "@/pages/components/dashboard/my-projects/project-add-modal";
import { Link } from "react-router-dom";

const startupOptions = [
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "launched",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "progress",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "closed",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "launched",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "progress",
  },
  {
    name: "Mad Cookies",
    category: "IT & Technology",
    status: "closed",
  },
];

const MyStartupPage = () => {

const {data} = useGetProjects();
console.log("data of startup", data)
  return (
    <>
      <div>
        <HeadingButton
          title="My Startups"
          subtitle="8 project"
          renderRight={<ProjectAddModal />}
        />
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:flex-row gap-5">
        {startupOptions &&
          startupOptions.map((item: any, index) => (
            <Link to="/dashboard/my-startups/detail">
            <ProjectCard
              key={index}
              name={item.name}
              category={item.category}
              status={item.status}
              />
              </Link>
          ))}
      </div>
    </>
  );
};

export default MyStartupPage;
