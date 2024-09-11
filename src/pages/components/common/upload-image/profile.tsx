import { Avatar } from "@/components/ui";
import { Camera } from "lucide-react";
import { PropsType } from "./types";

export const UploadImageProfile = ({
  preview,
  onUpload,
  placeholderImg,
}: PropsType) => {
  return (
    <div
      role="button"
      onClick={onUpload}
      className="2xl:min-w-24 min-w-20  2xl:h-24 h-20 relative"
    >
      <Avatar
        image={preview ? preview : placeholderImg}
        className="2xl:min-w-24 min-w-20  2xl:h-24 h-20"
      />
      <div className="2xl:w-10 2xl:h-10 w-8 h-8 flex justify-center items-center  rounded-full bg-background absolute bottom-0 right-0">
        <Camera className="text-success-dark" />
      </div>
    </div>
  );
};
