import { SendMessageBox } from "../send-message";

export const NoMessages = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-full flex justify-center items-center w-full">
        No Messages here Yet
      </div>
      <SendMessageBox />
    </div>
  );
};
