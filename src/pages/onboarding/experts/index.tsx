import { MainHeading } from "@/pages/components/common";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";

function ExpertsOnboardingPage() {
  const selectDefault = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <>
      <MainHeading
        heading="Lets create your expert profile"
        paragraph="Please tell us about your expertise to help us set up your profile message. It will help innovators learn about your expertise and experience."
      />
      {/* Personal Information  */}
      <div className="mt-6">
        <h4 className="text-success uppercase font-medium">
          Personal Information
        </h4>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input type="firstName" id="firstName" placeholder="" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input type="lastName" id="lastName" placeholder="" />
          </div>
          <div>
            <Label>Country</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>City</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <Label>My current position</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <hr className="border-secondary my-2" />
      {/* Expertise Information  */}
      <div className="">
        <h4 className="text-success uppercase font-medium">
          Expertise Information
        </h4>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <Label>Area of expertise</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>What i can do</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>My goals is to</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <hr className="border-secondary my-2" />
      {/* Project Preferences  */}
      <div className="">
        <h4 className="text-success uppercase font-medium">
          Project Preferences
        </h4>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <Label>Work compensation options</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Project Selection Process</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Project Intake Process</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <hr className="border-secondary my-2" />
      {/* Rate  */}
      <div className="">
        <h4 className="text-success uppercase font-medium">Rate</h4>
        <div className="grid grid-cols-6 gap-4 mt-4">
          <div className="col-span-3">
            <Label>Project engagement preference</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-3">
            <Label>Currency</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectDefault.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <Label htmlFor="discoveryCall">Discovery call</Label>
            <Input type="discoveryCall" id="discoveryCall" placeholder="" />
          </div>
          <div className="col-span-2">
            <Label htmlFor="consultation">Consultation</Label>
            <Input type="consultation" id="consultation" placeholder="" />
          </div>
          <div className="col-span-2">
            <Label htmlFor="delivery">Delivery</Label>
            <Input type="delivery" id="delivery" placeholder="" />
          </div>
        </div>
      </div>
      <hr className="border-secondary my-2" />
      {/* Upload Photo  */}
      <div className="flex justify-center">
        <div className="w-1/2 border-dashed border-secondary-foreground rounded-lg p-5">
          <CloudUpload />
          <h6>Upload your profile photo</h6>
          <div>
            <Button>
              <Label htmlFor="uploadFile-test" className="mb-0">Upload Profile Picture</Label>
            </Button>
            <Input type="file" id="uploadFile-test" className="hidden" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpertsOnboardingPage;
