import { Avatar } from "@/components/ui/avatar";
import { chatUserDataHook, expertsDetailsHook } from "@/store";
import { useHookstate } from "@hookstate/core";

const ProfileInfo = ({
  image,
  // name,
  description,
}: {
  image: string;
  name: string | undefined;
  description?: string;
}) => {
  const expertInfo = useHookstate(expertsDetailsHook);
  let expertName = expertInfo.get().name;
  const chatUser = useHookstate(chatUserDataHook);
  let chat_user = chatUser.get().chatUserName;
  console.log("🚀 ~ chatUserName:", chat_user);
 let name = expertName ?? chat_user
  return (
    <div className="flex gap-2">
      <Avatar image={image} size="lg" />
      <div>
        <h1>{name ?? "John Doe" }</h1>
        <h1 className="text-sm text-muted-foreground font-[400]">
          {" "}
          {description}
        </h1>
      </div>
    </div>
  );
};
export default ProfileInfo;
