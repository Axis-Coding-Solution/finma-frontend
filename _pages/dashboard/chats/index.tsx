import {
  ChatsSidebar,
  ChatsHeader,
  ChatsContent,
  SendMessageBox,
} from "@/_pages/components/chats";
import { NoMessages } from "@/_pages/components/chats/content/no-messages";

import { MainHeading } from "@/_pages/components/common";
import { useAppParams, useAuth } from "@/utils/hooks";
import socket from "@/lib/socket.io";
import { useEffect } from "react";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";

function ChatBoxPage() {
  const { id } = useAppParams();
  const auth = useAuth();

  let RenderContent = null;

  useEffect(() => {
    socket.emit(SOCKET_ENUMS.JOIN, auth?.user._id);
    return () => {
      socket.off(SOCKET_ENUMS.RECEIVE_MESSAGE);
      socket.disconnect(auth?.user._id);
    };
  }, [auth?.user]);

  if (!id) RenderContent = NoMessages;
  else {
    RenderContent = () => (
      <div className="h-full w-full flex flex-col gap-2">
        <ChatsHeader />
        <ChatsContent />
        <SendMessageBox />
      </div>
    );
  }
  return (
    <>
      <MainHeading heading="Chats" />
      <div className="flex gap-5 items-stretch max-h-[calc(100vh-11rem)] h-full">
        <ChatsSidebar />
        <RenderContent />
      </div>
    </>
  );
}
export default ChatBoxPage;
