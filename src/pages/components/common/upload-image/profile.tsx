import { Avatar } from "@/components/ui";
import { Camera } from "lucide-react";
import { PropsType } from "./types";
import { userAvatar1Image } from "@/assets/images";

export const UploadImageProfile = ({ preview, onUpload }: PropsType) => {
  return (
    <div
      role="button"
      onClick={onUpload}
      className="2xl:min-w-24 min-w-20  2xl:h-24 h-20 relative"
    >
      <Avatar
        image={preview ? preview : userAvatar1Image}
        onError={(e) => (e.currentTarget.src = userAvatar1Image)}
        className="2xl:min-w-24 min-w-20 border border-light-gray 2xl:h-24 h-20"
      />
      <div className="2xl:size-9 size-7 p-1.5 flex justify-center items-center border-2 border-warning rounded-full bg-background absolute bottom-0 right-0">
        <Camera className="text-warning" />
      </div>
    </div>
  );
};
