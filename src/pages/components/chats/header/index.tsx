import ProfileInfo from "./profile-info";
import HeaderOptions from "./header-options";
import { Ratings } from "@/components/ui/ratings";
import { DummyImage } from "@/data/chats";
// import { useGetChats } from "@/api/hooks/dashboard";
// import { useParams } from "react-router-dom";
import { chatUserDataHook } from "@/store";
import { useHookstate } from "@hookstate/core";

export function ChatsHeader() {
  // const {id }= useParams();
  // const { data = {} } = useGetChats();
  // const { data: chats } = data;

  const chatUser = useHookstate(chatUserDataHook);
  const getChatUser = chatUser.get;

const userData = getChatUser()
  
  return (
    <div className="2xl:p-4 p-3 justify-between items-center flex gap-2 text-2xl sticky top-0 left-0 w-full font-bold rounded bg-white">
      <div className="flex gap-4 items-center">
        <ProfileInfo  image={DummyImage}   userData={userData} name="John Doe" description="Analyst" />
        <div>
        <Ratings />
        </div>
      </div>
      <HeaderOptions />
    </div>
  );
}
