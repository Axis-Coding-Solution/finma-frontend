import { CloudUpload } from "lucide-react";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import { InputError } from "./input-error";

const FileUpload = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex justify-center mt-5 w-full lg:w-[400px]">
      <div className="md:w-1/2 w-full border-2 border-dashed border-secondary rounded-lg p-5 flex flex-col items-center justify-between gap-4 text-center">
        <CloudUpload size="50" className="text-secondary" />
        <h6>Upload your profile photo</h6>
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
    </div>
  );
};

export default FileUpload;
