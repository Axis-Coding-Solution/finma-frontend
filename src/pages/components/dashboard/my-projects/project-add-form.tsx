import { useEffect } from "react";
import { get } from "@/utils/axios";
import { InputError } from "@/components/ui/input-error";
import { FloatingInput, Label } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { UploadProfilePhotoModal } from "../../common";

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
  control,
  id,
}: any) => {
  const getProjectById = async () => {
    try {
      const response = await get(`/projects/${id}`);
      reset({
        name: response?.data.data.name || "",
        tagline: response?.data.data.industry || "",
        logoImage: response?.data.data.logoImage || "",
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
  console.log("error", errors);
  // const image = watch("logoImage");
  return (
    <>
      <div className="flex md:flex-row flex-col  justify-between md:items-start items-center gap-8">
        <div className="flex flex-col 2xl:gap-3 gap-2">
          <h4 className="2xl:text-[44px] text-3xl font-semibold text-foreground">
            Startup card
          </h4>
          <p className="2xl:text-2xl text-lg text-primary-disabled">
            Add or update this card anytime for your startup
          </p>
        </div>
        <UploadProfilePhotoModal
          control={control}
          errors={errors}
          image={null}
          register={register}
          name="logoImage"
          text="Upload Photo"
        />
      </div>
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
          <Controller
            control={control}
            name="industry"
            render={({ field }) => (
              <Select {...field}>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industryOptions.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors?.industry} />
        </div>
        <div className="col-span-2">
          <Label htmlFor="bio" className="text-muted-text font-normal">
            Bio
          </Label>
          <textarea
            {...register("bio")}
            className="outline-none border-b border-muted px-2 text-secondary-foreground 2xl:text-xl text-lg w-full"
          />
          <span>120 letter max</span>
          <InputError error={errors?.bio} />
        </div>
      </div>
    </>
  );
};
