import { userAvatar1Image } from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { chatUserDataHook } from "@/store";
import { useHookstate } from "@hookstate/core";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import { DoubleCheck, SingleCheck } from "@/assets/svgs";
import { convertDate } from "@/utils";

type PropsTypes = {
  item: any;
};
export const ChatContactItem = ({ item }: PropsTypes) => {
  let userName = item.user.email.split("@")[0].replace(/\b\w/g, (l: any) => l.toUpperCase())

  const chatUser = useHookstate(chatUserDataHook);
  const setChatUser = chatUser.set;

  return (
    <div className="pt-3">
      <Link to={`/dashboard/chats/${item._id}`}>
        <div
          className="flex py-3 gap-2"
          onClick={() =>
            setChatUser((prev) => ({
              ...prev,
              id: item.user._id,
              chatUserName: userName,
            }))
          }
        >
          <Avatar image={userAvatar1Image} size="md" />
          <div className="w-full">
            <div className="flex justify-between gap-1 ">
              <h6
                title={userName}
                className="text-foreground overflow-x-clip  text-sm 0 w-[10rem] font-semibold"
              >
                {/* {truncateText(userName, 13)} */}
                {userName}
              </h6>
              <div className="flex justify-center items-center gap-1">
                {item?.lastMessage?.receivedAt ? <img src={SingleCheck} alt="" /> : item?.lastMessage?.readAt && <img src={DoubleCheck} alt="" />}
                <p className=" inline-flex text-muted-foreground font-semibold text-[10px]">
                  {item?.lastMessage?.createdAt && convertDate(item.lastMessage.createdAt)}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-muted-foreground text-xs w-full ">
                {item?.lastMessage?.content || ''}
              </p>

              {/* <Check className="text-muted-foreground" size={17} /> */}
            </div>
          </div>
        </div>
      </Link>
    </div>

    // <Link
    //   to={`/dashboard/chats/${item._id}`}
    //   className="px-4 py-2 cursor-pointer"
    // >
    //   <div className="flex items-start justify-between">
    //     <div className="w-1/2 flex items-center gap-4 truncate bg-red-400">
    //       <Avatar image={userAvatar1Image} size="md" />
    //       <div>
    //         <h6 className="text-foreground  text-base font-semibold">
    //           {userName}
    //         </h6>
    //         <span className="text-muted-foreground  text-xs whitespace-nowrap font-normal">
    //           {/* {designation} */}
    //          Good Morning 🌅
    //         </span>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-2 text-muted-foreground text-sm bg-green-400">
    //       <Check size="20" className="text-success" />
    //       <span className=" 2xl:text-base text-xs">
    //         {/* {lastReceived} */}
    //         10:16 PM
    //       </span>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-between mt-2">
    //     <p className="text-muted-foreground 2xl:text-lg text-sm w-[80%]">
    //       {message}
    //       Hi There
    //     </p>
    //     <Badge variant="success">5</Badge>
    //   </div>
    // </Link>
  );
};
