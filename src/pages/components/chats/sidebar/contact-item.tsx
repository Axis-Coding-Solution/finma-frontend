import { Avatar } from "@/components/ui/avatar";
import { chatUserDataHook } from "@/store";
import { useHookstate } from "@hookstate/core";
import {  useNavigate, useParams } from "react-router-dom";
import { DoubleCheck, SingleCheck } from "@/assets/svgs";
import { convertDate, truncateText } from "@/utils";
import { useEffect } from "react";

type PropsTypes = {
  item: any;
  chatId: string | undefined;
  onLinkClick: any;
};
export const ChatContactItem = ({ item, chatId, onLinkClick }: PropsTypes) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chatUser = useHookstate(chatUserDataHook);
  const setChatUser = chatUser.set;
  const isActive = id === item.id;
  useEffect(() => {
    if (item && chatId) {
      item.id === chatId && setChatUser(item.user);
    }
  }, [item, chatId]);

  const handleClick = (e: any) => {
    e.preventDefault();
    onLinkClick(true);
    navigate(`/dashboard/chats/${item.id}`);
  };
  return (
    <div className="pt-1 cursor-pointer" onClick={handleClick}>
      <div
        className={`flex p-2 gap-2 rounded ${
          isActive ? "bg-secondary-dark" : "border-white"
        }`}
      >
        <Avatar image={item?.user?.profilePicture} size="lg" />
        <div className="w-full">
          <div className="flex justify-between gap-2">
            <div className="">
              <h6
                title={item?.user?.fullName}
                className="text-foreground overflow-x-clip  text-sm  font-semibold"
              >
                {truncateText(item?.user?.fullName, 16)}
              </h6>
              <span className="text-muted-text text-sm">
                {truncateText(
                  item?.lastMessage ?? item?.user?.entrepreneurType,
                  14
                )}
              </span>
            </div>
            <div className="flex justify-center items-center gap-1">
              {item?.lastMessage?.receivedAt ? (
                <img src={SingleCheck} alt="" />
              ) : (
                item?.lastMessage?.readAt && <img src={DoubleCheck} alt="" />
              )}
              <p className=" text-muted-foreground font-semibold text-[10px] text-wrap">
                {item?.lastMessage?.createdAt &&
                  convertDate(item.lastMessage.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-muted-foreground text-xs w-full ">
              {item?.lastMessage?.content || ""}
            </p>

            {/* <Check className="text-muted-foreground" size={17} /> */}
          </div>
        </div>
      </div>
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
