import ProfileInfo from "./profile-info";
import HeaderOptions from "./header-options";

import { Ratings } from "@/components/ui/ratings";
import { DummyImage } from "@/data/chats";

export function ChatsHeader() {
  return (
    <div className="2xl:p-4 p-3 justify-between flex gap-2 text-2xl sticky top-0 left-0 w-full font-bold rounded-lg bg-white">
      <div className="flex gap-4 items-center">
        <ProfileInfo image={DummyImage} name="John Doe" description="Analyst" />
        <Ratings />
      </div>

      <HeaderOptions />
    </div>
    //
  );
}
