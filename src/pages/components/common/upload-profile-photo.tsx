import { ProfileAvatar } from "@/assets/svgs";
import { Button, InputError } from "@/components/ui";
import { CloudUploadIcon } from "lucide-react";
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

export const UploadProfilePhoto = ({
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
      <div className="flex gap-5 items-center">
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
          className="border border-border rounded-full"
        >
            <img
              src={ preview  ? preview : ProfileAvatar }
              className="size-20 rounded-full border border-[#4D4D4D]"
              onLoad={(e) => URL.revokeObjectURL(e.currentTarget.src)}
              alt="Profile Photo"
            />
        </div>
        <div className="cursor-pointer">
          <Button
            icon={<CloudUploadIcon />}
            variant="secondary-dark"
            className="font-normal"
            type="button"
            onClick={onUpload}
          >
            Choose photo
          </Button>
        </div>
      </div>
      <InputError error={errors[name]} />
    </div>
  );
};
