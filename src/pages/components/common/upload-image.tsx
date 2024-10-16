import { InputError } from "@/components/ui";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import {
  UploadImageOnboarding,
  UploadImageStartup,
  UploadImageProfile,
} from "./upload-image/index.ts";

type PropTypes = {
  image: File | string | null;
  text?: string;
  register: any;
  errors: any;
  control: any;
  name?: string;
  variant?: "profile" | "startup" | "onboarding";
};

const designsForVariants = {
  onboarding: UploadImageOnboarding,
  startup: UploadImageStartup,
  profile: UploadImageProfile,
};

export const UploadImage = ({
  errors,
  control,
  image,
  name = "profilePicture",
  variant = "onboarding", // onboarding, startup, profile
}: PropTypes) => {
  const [preview, setPreview] = useState<undefined | string>("");
  const hiddenInputRef = useRef<any>(null);

  const handleUploadedFile = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: any
  ) => {
    const file = event.target.files?.[0];
    const urlImage = URL.createObjectURL(file as any);
    setPreview(urlImage);
    onChange(file);
  };

  const onUpload = () => {
    hiddenInputRef?.current?.click();
  };

  useEffect(() => {
    if (image && !preview) {
      if (image instanceof File) setPreview(URL.createObjectURL(image as any));
      else setPreview(image);
    }
  }, [image]);
  // md:max-w-64

  const CurrentVariantDesign = designsForVariants[variant];

  const propsForDesign = {
    onUpload,
    preview,
  };

  return (
    <div className="relative">
      <div className="flex gap-5 items-center sm:justify-start justify-center">
        <Controller
          control={control}
          name={name}
          render={({ field: { ref, onChange, value, ...others } }) => (
            <input
              type="file"
              id="upload-profile-pic"
              className="hidden"
              multiple={false}
              ref={(e: HTMLInputElement) => {
                hiddenInputRef.current = e;
                ref(e);
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleUploadedFile(e, onChange)
              }
              {...others}
            />
          )}
        />
        {<CurrentVariantDesign {...propsForDesign} />}
      </div>
      <InputError error={errors[name]} />
    </div>
  );
};
