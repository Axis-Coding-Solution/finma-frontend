import { InputError } from "@/components/ui/input-error";
import {
  Button,
  DialogClose,
  FloatingInput,
  Label,
  ReactSelect,
} from "@/components/ui";

import { Controller } from "react-hook-form";
import { UploadImage } from "../../common";

const industryOptions = [
  { value: "IT & Technology", label: "IT & Technology" },
  { value: "Software Company", label: "Software Company" },
  { value: "Electrical", label: "Electrical" },
  { value: "Medical", label: "Medical" },
  { value: "Mechanical", label: "Mechanical" },
  { value: "Farming", label: "Farming" },
];

export const StartupForm = ({
  register,
  errors,
  control,
  title,
  detail,
  watch,
  isSubmitting,
}: any) => {
  const image = watch("logo");
  return (
    <>
      <div className="flex md:flex-row flex-col  justify-between md:items-start items-center 2xl:gap-8 gap-6">
        <div className="flex flex-col 2xl:gap-3 gap-0">
          <h4 className="2xl:text-[44px] text-2xl font-semibold text-foreground">
            {title} Startup card
          </h4>
          <p className="2xl:text-2xl text-base text-primary-disabled">
            {detail} this card anytime for your startup
          </p>
        </div>
        <UploadImage
          control={control}
          errors={errors}
          image={image}
          register={register}
          name="logo"
          text="Upload Photo"
          variant="startup"
        />
      </div>
      <div className="grid grid-cols-2 2xl:gap-8 gap-6">
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
          <DialogClose>
            <Button
              disabled={isSubmitting}
              type="button"
              variant="outline"
              className="w-full"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button disabled={isSubmitting} type="submit" className="w-full">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};
