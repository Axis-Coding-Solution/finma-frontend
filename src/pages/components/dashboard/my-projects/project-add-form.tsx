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

export const ProjectAddForm = ({
  register,
  errors,
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
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      getProjectById();
    }
  }, [id]);

  // const image = watch("logoImage");
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
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
        <div className="col-span-2">
          <Label htmlFor="bio" className="text-muted-text font-normal">
            Bio
          </Label>
          <textarea className="outline-none border-b border-muted px-2 text-secondary-foreground 2xl:text-xl text-lg w-full" />
          <span>120 letter max</span>
        </div>
      </div>
    </>
  );
};
