import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FileUpload from "@/components/ui/fileupload";

export const ProjectForm = () => {
  return (
    <div>
      <div className="flex flex-col w-full md:flex-row gap-5 items-start">
        <div className="md:max-w-[55%] w-full flex flex-col gap-8">
          <div>
            {" "}
            <Label>Project Name</Label>
            <Input />
          </div>
          <div>
            <Label>Tagline</Label>
            <Input />
          </div>
        </div>
        <div className="md:max-w-[45%] w-full">
          <Label>Project Logo</Label>
          <FileUpload text="Upload project logo" />
        </div>
      </div>
      <div>
        <Label>Project bio (130 character only)</Label>
        <Input />
      </div>
    </div>
  );
};

