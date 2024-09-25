import { Avatar } from "@/components/_ui/avatar";
import { chatUserDataHook, expertsDetailsHook } from "@/store";
import { useHookstate } from "@hookstate/core";

const ProfileInfo = ({
  image,
  id,
  chats,
  // name,
  description,
}: {
  image: string;
  name: string | undefined;
  description?: string;
  chats?:any;
  id?:string;
}) => {
  const expertInfo = useHookstate(expertsDetailsHook);
  let expertName = expertInfo.get().name;
  const chatUser = useHookstate(chatUserDataHook);
  let chat_user = chatUser.get().chatUserName;
  let name = expertName ?? chat_user;
  console.log("qqqqqqqqqqqqwewwwwwwwwwww", chats)
  return (
    <div className="flex gap-2">
      <Avatar image={image} size="lg" />
      <div>
        <h1 className="text-foreground 2xl:text-xl text-lg">{ "John Doe"}</h1>
        {/* <h1 className="text-foreground 2xl:text-xl text-lg">name</h1> */}
        <h1 className="2xl:text-sm text-muted-foreground font-[400] text-xs">
          {" "}
          {description}
        </h1>
      </div>
    </div>
  );
};
export default ProfileInfo;
