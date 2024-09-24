import {
  ChatsSidebar,
  ChatsHeader,
  ChatsContent,
  SendMessageBox,
} from "@/pages/components/chats";

// import UnderConstruction from "@/pages/components/under-construction";

import { MainHeading } from "@/pages/components/common";
import {  useAuth } from "@/utils/hooks";
import socket from "@/lib/socket.io";
import { useEffect } from "react";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";

function ChatBoxPage() {
  // const { id } = useAppParams();
  const auth = useAuth();

  let RenderContent = null;

  useEffect(() => {
    socket.emit(SOCKET_ENUMS.JOIN, auth?.user._id);
    // return () => {
    //   socket.off(SOCKET_ENUMS.RECEIVE_MESSAGE);
    //   socket.disconnect();
    // };
  }, [auth?.user]);

  // if (!id) RenderContent = NoMessages;
  // else {
    RenderContent = () => (
      <div className="h-full w-full flex flex-col gap-2">
        <ChatsHeader />
        <ChatsContent />
        <SendMessageBox />
      </div>
    );
  // }

  return (
    <>
      <MainHeading title="Chats" />
      <div className="flex gap-5 items-stretch max-h-[calc(100vh-11rem)] h-full">
        <ChatsSidebar />
        <RenderContent />
      </div>
    </>
  );
}
export default ChatBoxPage;

// export default () => {
//   return (
//     <div>
//       <UnderConstruction />
//     </div>
//   );
// };
