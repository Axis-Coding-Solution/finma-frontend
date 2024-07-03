import { CloudUpload } from "lucide-react";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import { InputError } from "./input-error";

type PropTypes = {
  text: string;
};

const FileUpload = ({ text = "Upload your profile photo" }: PropTypes) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-full border-2 border-dashed border-border rounded-lg p-3 flex flex-col items-center justify-between gap-4">
      <CloudUpload size="50" className="text-secondary" />
      <span className="text-sm text-foreground">{text}</span>
      <div className="cursor-pointer">
        <Button type="button">
          <Label className="mb-0 cursor-pointer" htmlFor="uploadFile">
            Browse files
          </Label>
        </Button>
        <Input
          type="file"
          {...register("profilePicture")}
          onChange={(e) => setValue("profilePicture", e.target.files?.[0])}
          id="uploadFile"
          className="hidden"
        />
        <InputError error={errors.profilePicture} />
      </div>
    </div>
  );
};
export default FileUpload;
