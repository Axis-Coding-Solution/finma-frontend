import {  InputError } from "@/components/ui";
import { CloudUpload, } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";

type PropTypes = {
  image: File | null;
  text?: string;
  register: any;
  errors: any;
  control: any;
  name?: string;
};

export const UploadProfilePhotoModal = ({
  errors,
  control,
  image,
  name = "profilePicture",
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
    if (image && !preview) setPreview(URL.createObjectURL(image as any));
  }, [image]);
  // md:max-w-64
  return (
    <div>
      <div className="flex flex-col items-center">
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
        <div
          onClick={onUpload}
          role="button"
          className="2xl:w-36 w-28 2xl:h-36 h-28 rounded-full border-2 border-info flex flex-col justify-center items-center"
        >
          {preview && preview ? (
            <img
              src={preview}
              className="w-full h-full rounded-full"
              onLoad={(e) => URL.revokeObjectURL(e.currentTarget.src)}
              alt="Profile Photo"
            />
          ) : (
            <>
              <CloudUpload className="text-info" size={36} />
              <div className="flex flex-col gap-0 leading-0 text-foreground 2xl:text-base text-center text-sm">
                <p>Best</p>
                <p>190 x 190</p>
              </div>
            </>
          )}
        </div>
        <div className="cursor-pointer">
          <button
            className="2xl:text-2xl text-lg font-medium"
            type="button"
            onClick={onUpload}
          >
            Upload logo
          </button>
        </div>
      </div>
      <InputError error={errors[name]} />
    </div>
  );
};
