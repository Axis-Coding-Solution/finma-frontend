import { Image, Files, Video } from "lucide-react";
const FileMessage = () => {
  return (
    <div className="text-black flex flex-col gap-3">
      <Image />
      <Files />
      <Video />
    </div>
  );
};

export default FileMessage;
