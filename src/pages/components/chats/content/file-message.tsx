
import { Image, Files, Video } from "lucide-react";
import { useRef } from "react";

const FileMessage = ({ onFileSelect}: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileVideoRef = useRef<HTMLInputElement>(null);
  const fileDocumentRef = useRef<HTMLInputElement>(null);
  const handleIconClick = (type : string) => {
    if (fileInputRef.current && type === "image") {
      fileInputRef.current.click();
    } else if (fileVideoRef.current && type === "video") {
      fileVideoRef.current.click();
    } else if (fileDocumentRef.current && type === "document") {
      fileDocumentRef.current.click();
    }
  };

  const handleFileChange = (event : any ) => {
    const file = event?.target?.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="text-black flex flex-col gap-3">
      <div>
        <Image
          onClick={() => handleIconClick("image")}
          style={{ cursor: "pointer" }}
          size={24}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
      <div>
        <Files
          onClick={() => handleIconClick("document")}
          style={{ cursor: "pointer" }}
          size={24}
        />
        <input
          type="file"
          ref={fileDocumentRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="application/*"
        />
      </div>
      <div>
        <Video
          onClick={() => handleIconClick("video")}
          style={{ cursor: "pointer" }}
          size={24}
        />
        <input
          type="file"
          ref={fileVideoRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="video/*"
        />
      </div>
    </div>
  );
};

export default FileMessage;
