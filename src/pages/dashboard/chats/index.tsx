import {
  ChatsSidebar,
  ChatsHeader,
  ChatsContent,
  SendMessageBox,
} from "@/pages/components/chats";

import { MainHeading } from "@/pages/components/common";
import { useAppParams, useAuth } from "@/utils/hooks";
import socket from "@/lib/socket.io";
import { useEffect, useState } from "react";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";
import { NoMessages } from "@/pages/components/chats/content/no-messages";
import { useNavigate } from "react-router-dom";

function ChatBoxPage() {
  const { id } = useAppParams();
  const auth = useAuth();
  const navigate = useNavigate();

  const [isMobileView, setIsMobileView] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Track screen width and toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 786);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setShowContent(true);
  };
  const handleBackClick = () => {
    setShowContent(false);
    navigate(-1);
  };

  let RenderContent = null;
  useEffect(() => {
    socket.emit(SOCKET_ENUMS.IS_ONLINE, {userId:auth?.user.id, isOnline: true});
    socket.emit(SOCKET_ENUMS.JOIN, auth?.user.id);
    return () => {
      socket.emit(SOCKET_ENUMS.IS_ONLINE, {userId:auth?.user.id, isOnline: false});
    }
  }, []);

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
      <MainHeading title="Chats" />
      <div className="flex gap-5 items-stretch md:max-h-[calc(100vh-11rem)] md:h-full h-screen">
        {(!isMobileView || !showContent) && (
          <ChatsSidebar onLinkClick={handleLinkClick} />
        )}

        {(!isMobileView || showContent) && (
          <div className="flex-1">
            {isMobileView && showContent && (
              <button
                onClick={handleBackClick}
                className="mb-4 px-4 py-2 bg-blue-500 text-white"
              >
                Back
              </button>
            )}
            <RenderContent />
          </div>
        )}
      </div>
    </>
  );
}
export default ChatBoxPage;
