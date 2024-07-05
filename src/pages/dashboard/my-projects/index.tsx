import logoimage from "@/assets/images/logoimage.png";
import { MainHeading } from "@/pages/components/common";
import ProjectCard from "@/pages/components/dashboard/my-projects/card";
import ProjectAddModal from "@/pages/components/dashboard/my-projects/project-add-modal";
import { get } from "@/utils/axios";
import axios from "axios";
import { useEffect, useState } from "react";

const MyProjectsPage = () => {
  const [projectCardArray, setProjectCardArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("/projects");
        setProjectCardArray(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("project",projectCardArray)

  
  return (
    <>
      <div>
        <MainHeading heading="My Projects" renderRight={<ProjectAddModal />} />
      </div>
      <div className="grid grid-cols-3  lg:flex-row gap-5">
        {projectCardArray.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default MyProjectsPage;
