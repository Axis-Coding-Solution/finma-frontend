import ProfileInfo from "./profile-info";
import HeaderOptions from "./header-options";

import { Ratings } from "@/components/_ui/ratings";
import { DummyImage } from "@/data/chats";

export function ChatsHeader() {
  return (
    <div className="py-5 px-7 justify-between flex gap-2 text-2xl sticky top-0 left-0 w-full font-bold rounded-lg bg-accent">
      <div className="flex items-center">
        <ProfileInfo image={DummyImage} name="John Doe" description="Analyst" />
        <Ratings />
      </div>

      <HeaderOptions />
    </div>
    //
  );
}
