import { CloudUpload } from "lucide-react";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { InputError } from "./input-error";

type PropTypes = {
  text?: string;
  register: any;
  errors: any;
};

const FileUpload = ({
  text = "Upload your profile photo",
  register,
  errors,
}: PropTypes) => {
  return (
    <div className="w-full border-2 border-dashed border-border rounded-lg p-3 flex flex-col items-center justify-between gap-4">
      <CloudUpload size="50" className="text-secondary" />
      <span className="text-sm text-foreground">{text}</span>
      <div className="cursor-pointer">
        <Button type="button">
          <Label className="mb-0 cursor-pointer" htmlFor="upload-profile-pic">
            Browse files
          </Label>
        </Button>
        <Input
          type="file"
          {...register("profilePicture")}
          id="upload-profile-pic"
          className="hidden"
        />
        <InputError error={errors.profilePicture} />
      </div>
    </div>
  );
};
export default FileUpload;
