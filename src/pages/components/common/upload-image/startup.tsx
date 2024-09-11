import { CloudUpload } from "lucide-react";
import { PropsType } from "./types";

export const UploadImageStartup = ({ onUpload, preview }: PropsType) => {
  return (
    <>
      <div
        onClick={onUpload}
        role="button"
        className="2xl:w-36 w-28 2xl:h-36 h-28 rounded-full border-2 border-info flex flex-col justify-center items-center"
      >
        {preview && preview ? (
          <img
            src={preview}
            className="size-full rounded-full"
            onLoad={(e) => URL.revokeObjectURL(e.currentTarget.src)}
            alt="Profile Photo"
          />
        ) : (
          <>
            <CloudUpload className="text-info" size={36} />
            <div className="flex flex-col gap-0 leading-0 text-foreground 2xl:text-base text-center text-sm">
              <p>Best</p>
              <p>190 x 190</p>
            </div>
          </>
        )}
      </div>
      <div className="cursor-pointer">
        <button
          className="2xl:text-2xl text-lg font-medium"
          type="button"
          onClick={onUpload}
        >
          Upload logo
        </button>
      </div>
    </>
  );
};
