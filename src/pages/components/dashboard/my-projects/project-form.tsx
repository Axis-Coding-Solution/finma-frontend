import FileUpload from "@/components/_ui/file-upload";
import { useEffect } from "react";
import { get } from "@/utils/axios";
import { InputError } from "@/components/_ui/input-error";
import { FloatingInput, Label } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const industryOptions = [
  { value: "1", label: "IT & Technology" },
  { value: "2", label: "Software Company" },
  { value: "3", label: "Electrical" },
  { value: "4", label: "Medical" },
  { value: "5", label: "Mechanical" },
  { value: "6", label: "Farming" },
];

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
    } catch (error) {}
  };

  useEffect(() => {
    if (id) {
      getProjectById();
    }
  }, [id]);

  const image = watch("logoImage");
  return (
    <div>
      <div className="flex flex-col w-full md:flex-row 2xl:gap-10 gap-6 items-start">
        <div className="md:max-w-[55%] w-full flex flex-col gap-8">
          <div>
            <FloatingInput
              label="Startup name"
              type="text"
              {...register("name")}
            />
            <InputError error={errors?.name} />
          </div>
          <div>
            <Select>
              <SelectTrigger id="selectCity">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {industryOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" w-full">
          <FileUpload
            control={control}
            image={image}
            register={register}
            errors={errors}
            name="logoImage"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="bio" className="text-muted-text font-normal">
          Project bio (130 character only)
        </Label>
        <textarea className="h-20 outline-none border-b border-muted p-2 text-secondary-foreground 2xl:text-xl text-lg w-full" />
      </div>
    </div>
  );
};
