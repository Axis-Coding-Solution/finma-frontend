import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FileUpload from "@/components/ui/file-upload";

export const ProjectForm = ({ register, control, errors }: any) => {
  return (
    <div>
      <div className="flex flex-col w-full md:flex-row gap-5 items-start">
        <div className="md:max-w-[55%] w-full flex flex-col gap-8">
          <div>
            <Label htmlFor="name">Project Name</Label>
            <Input type="text" id="name"  {...register("name")} />
          </div>
          <div>
            <Label htmlFor="tagline">Tagline</Label>
            <Input
              type="text"
              id="tagline"
              {...register("tagline")}
            />
          </div>
        </div>
        <div className="md:max-w-[45%] w-full">
          <Label>Project Logo</Label>
          {/* <FileUpload text="Upload project logo" /> */}
        </div>
      </div>
      <div>
        <Label htmlFor="bio">Project bio (130 character only)</Label>
        <Input type="text" id="bio" {...register("bio")} />
      </div>
    </div>
  );
};
