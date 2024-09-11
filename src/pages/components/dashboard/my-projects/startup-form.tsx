import { useEffect } from "react";
import { get } from "@/utils/axios";
import { InputError } from "@/components/ui/input-error";
import {
  Button,
  DialogClose,
  FloatingInput,
  Label,
  ReactSelect,
} from "@/components/ui";

import { Controller } from "react-hook-form";
import { UploadProfilePhotoModal } from "../../common";

const industryOptions = [
  { value: "IT & Technology", label: "IT & Technology" },
  { value: "Software Company", label: "Software Company" },
  { value: "Electrical", label: "Electrical" },
  { value: "Medical", label: "Medical" },
  { value: "Mechanical", label: "Mechanical" },
  { value: "Farming", label: "Farming" },
];

export const StartupForm = ({ register, errors, reset, control, id }: any) => {
  const getProjectById = async () => {
    try {
      const response = await get(`/projects/${id}`);
      reset({
        name: response?.data.data.name || "",
        tagline: response?.data.data.industry || "",
        logoImage: response?.data.data.logo || "",
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
          name="logo"
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
            name="industry"
            control={control}
            render={({ field }: any) => (
              <ReactSelect
                {...field}
                value={field.value}
                label="Industry"
                placeholder=""
                options={industryOptions}
              />
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
            className="outline-none border-b border-muted  text-secondary-foreground 2xl:text-xl text-lg w-full"
          />
          <span>120 letter max</span>
          <InputError error={errors?.bio} />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="md:w-1/2 w-full flex items-center justify-between gap-4">
          <DialogClose onClick={(e) => e.stopPropagation()}>
            <Button type="button" variant="outline" className="w-full">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" className="w-full">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};
