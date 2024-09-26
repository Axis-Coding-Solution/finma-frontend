import { Avatar } from "@/components/_ui/avatar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { chatUserDataHook, expertsDetailsHook } from "@/store";
// import { useHookstate } from "@hookstate/core";

const ProfileInfo = ({
  image,
  userData,
  name,
  description,
}: {
  image: string;
  name: string | undefined;
  description?: string;
  userData?: any;
}) => {
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  // const expertInfo = useHookstate(expertsDetailsHook);
  // let expertName = expertInfo.get().name;
  // const chatUser = useHookstate(chatUserDataHook);
  // let chat_user = chatUser.get().chatUserName;
  // let name = expertName ?? chat_user;
  useEffect(() => {
    if (Array.isArray(userData) && id) {
      const foundUser = userData.find((user: any) => user.id === id);
  
      if (foundUser) {
        setSelectedUser(foundUser);
      }
    }
  }, [userData, id]);

  return (
    <div className="flex gap-2">
      <Avatar image={selectedUser?.profilePicture ?? image} size="lg" />
      <div>
        <h1 className="text-foreground 2xl:text-xl text-lg">
          {selectedUser?.fullName ?? name}
        </h1>
        <h1 className="2xl:text-sm text-muted-foreground font-[400] text-xs">
          {selectedUser?.entrepreneurType ?? description}
        </h1>
      </div>
    </div>
  );
};
export default ProfileInfo;
