import { Button } from "@/components/ui";
import { CloudUploadIcon } from "lucide-react";
import { PropsType } from "./types";

import { ProfileAvatar } from "@/assets/svgs";

export const UploadImageOnboarding = ({ onUpload, preview }: PropsType) => {
  return (
    <>
      <div
        onClick={onUpload}
        role="button"
        className="border border-border rounded-full"
      >
        <img
          src={preview ? preview : ProfileAvatar}
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
    </>
  );
};
