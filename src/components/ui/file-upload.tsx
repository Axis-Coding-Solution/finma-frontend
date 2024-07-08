import { CloudUpload, Edit } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { InputError } from "./input-error";
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

const FileUpload = ({
  text = "Upload your profile photo",
  errors,
  control,
  image,
  name = "profilePicture",
}: PropTypes) => {
  const [preview, setPreview] = useState<undefined | string>();
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

  return (
    <div className="max-w-64 max-h-48 w-full h-full border-2 border-dashed border-border rounded-lg p-5 flex flex-col items-center justify-center gap-4">
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, onChange, value, ...others } }) => (
          <Input
            type="file"
            id="upload-profile-pic"
            className="hidden"
            multiple={false}
            ref={(e) => {
              hiddenInputRef.current = e;
              ref(e);
            }}
            onChange={(e) => handleUploadedFile(e, onChange)}
            {...others}
          />
        )}
      />
      {preview ? (
        <div className="relative flex flex-row-reverse">
          <span
            className="block absolute -top-7 -right-7 text-foreground hover:text-success rounded transition"
            role="button"
            title="Change Picture"
            onClick={onUpload}
          >
            <Edit size={20} />
          </span>
          <img src={preview} className="max-w-48 max-h-32 " />
        </div>
      ) : (
        <>
          <CloudUpload size="50" className="text-secondary" />
          <span className="text-sm text-foreground">{text}</span>
          <div className="cursor-pointer">
            <Button type="button" onClick={onUpload}>
              Browse files
            </Button>
            <InputError error={errors[name]} />
          </div>
        </>
      )}
    </div>
  );
};
export default FileUpload;
