import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FileUpload from "@/components/ui/file-upload";
import { useEffect, useState } from "react";
import { get } from "@/utils/axios";

export const ProjectForm = ({
  register, 
  control,
  errors,
  data,
  reset,
  id,
}: any) => {
  const [project, setProject] = useState<any>({});

  const getProjectById = async () => {
    try {
      const response = await get(`/projects/${id}`);
      reset({
        name: response?.data.data.name || "",
        tagline: response?.data.data.tagline || "",
        logoImage: response?.data.data.profilePicture || "",
        bio: response?.data.data.bio || "",
      });
      console.log("🚀 ~ getProjectById ~ response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      getProjectById();
    }
  }, [id]);

  console.log("🚀 ~ ProjectEditModal ~ project:", project?.name);

  return (
    <div>
      <div className="flex flex-col w-full md:flex-row gap-5 items-start">
        <div className="md:max-w-[55%] w-full flex flex-col gap-8">
          <div>
            <Label htmlFor="name">Project Name</Label>
            <Input type="text" id="name" {...register("name")} />
          </div>
          <div>
            <Label htmlFor="tagline">Tagline</Label>
            <Input
              // value={data.tagline}
              type="text"
              id="tagline"
              {...register("tagline")}
            />
          </div>
        </div>
        <div className="md:max-w-[45%] w-full">
          <Label>Project Logo</Label>
          <FileUpload register={register} errors={errors} name="logoImage"  />
        </div>
      </div>
      <div>
        <Label htmlFor="bio">Project bio (130 character only)</Label>
        <Input type="text" id="bio" {...register("bio")} />
      </div>
    </div>
  );
};
