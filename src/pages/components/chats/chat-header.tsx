import {
  userAvatar2Image,
  userAvatar3Image,
  userAvatar4Image,
  userAvatar5Image,
} from "@/assets/images";

import { Ratings } from "@/components/ui/ratings";
import { useParams } from "react-router-dom";
import ProfileInfo from "./header/profile-info";
import HeaderOptions from "./header/header-options";
const expertImages = {
  "Salama M.": userAvatar2Image,
  "Jim Smith.": userAvatar3Image,
  "Vivan Violet": userAvatar4Image,
  "Jackie Jess": userAvatar5Image,

  // Add more mappings as needed
};

export function ChatHeader() {
  const { description, expert } = useParams<{
    description?: string;
    expert: keyof typeof expertImages;
  }>();
  const avatarImage = expertImages[expert!];

  return (
    <div className="py-4 flex gap-4 text-2xl sticky top-0 left-0 w-full font-bold rounded-lg bg-accent p-2">
      <ProfileInfo
        image={avatarImage}
        name={expert}
        description={description}
      />
      <div className="flex flex-col">
        <div className="flex gap-8">
          <Ratings />
          <HeaderOptions />
        </div>
      </div>
    </div>
  );
}
