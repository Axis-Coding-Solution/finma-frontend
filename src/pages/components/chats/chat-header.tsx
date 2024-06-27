import {
  userAvatar2Image,
  userAvatar3Image,
  userAvatar4Image,
  userAvatar5Image,
} from "@/assets/images";

import { Ratings } from "@/components/ui/ratings";
import { useParams } from "react-router-dom";
import ProfileInfo from "../../../components/core/chats-layout/header/profile-info";

import HeaderOptions from "../../../components/core/chats-layout/header/header-options";
import { DummyImage } from "@/lib/data";
const expertImages = {
  "Salama M.": userAvatar2Image,
  "Jim Smith.": userAvatar3Image,
  "Vivan Violet": userAvatar4Image,
  "Jackie Jess": userAvatar5Image,

  // Add more mappings as needed
};

export function ChatHeader() {
}
