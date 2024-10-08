import { Input } from "@/components/_ui/input";
import { Label } from "@/components/_ui/label";
import FileUpload from "@/components/_ui/file-upload";
import { useEffect } from "react";
import { get } from "@/utils/axios";
import { InputError } from "@/components/_ui/input-error";

export const ProjectForm = ({
  register,
  control,
  errors,
  watch,
  reset,
  id,
}: any) => {
  const getProjectById = async () => {
    try {
      const response = await get(`/projects/${id}`);
      reset({
        name: response?.data.data.name || "",
        tagline: response?.data.data.tagline || "",
        logoImage: response?.data.data.profilePicture || "",
        bio: response?.data.data.bio || "",
      });
    } catch (error) {
    }
  };

  useEffect(() => {
    if (id) {
      getProjectById();
    }
  }, [id]);

  const image = watch("logoImage");
  return (
    <div>
      <div className="flex flex-col w-full md:flex-row gap-5 items-start">
        <div className="md:max-w-[55%] w-full flex flex-col gap-8">
          <div>
            <Label htmlFor="name">Project Name</Label>
            <Input type="text" id="name" {...register("name")} />
            <InputError error={errors?.name} />
          </div>
          <div>
            <Label htmlFor="tagline">Tagline</Label>
            <Input type="text" id="tagline" {...register("tagline")} />
          </div>
        </div>
        <div className="md:max-w-[45%] w-full">
          <Label>Project Logo</Label>
          <FileUpload
            control={control}
            image={image}
            text="Upload project logo..."
            register={register}
            errors={errors}
            name="logoImage"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="bio">Project bio (130 character only)</Label>
        <Input type="text" id="bio" {...register("bio")} />
      </div>
    </div>
  );
};
