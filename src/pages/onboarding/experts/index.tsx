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
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@/utils/constants";
import { onboardingExpertsInitialValues } from "@/utils/initial-values";
import { onboardingExpertsSchema } from "@/utils/validation-schemas/onboarding";
import { InputError } from "@/components/ui/input-error";
import {cities, countries } from "@/data/dashboard/innovators";
import {
  areaOfExpertise,
  compensationOptions,
  currency,
  currentPosition,
  projectEngagementPreference,
  projectIntakeProcess,
  selectionProcess,
  whatICanDo,
} from "@/data/dashboard/experts";
import FileUpload from "@/components/ui/fileupload";

function ExpertsOnboardingPage() {
  const selectDefault = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingExpertsInitialValues,
    
    resolver:yupResolver(onboardingExpertsSchema),
  });
  const onSubmitHandler = async (
    values: typeof onboardingExpertsInitialValues
  ) => {
    console.log(values);
  };

  return (
    <>
      <MainHeading
        heading="Lets create your expert profile"
        paragraph="Please tell us about your expertise to help us set up your profile message. It will help innovators learn about your expertise and experience."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {/* Personal Information  */}
        <div className="mt-6">
          <h4 className="text-success uppercase font-medium">
            Personal Information
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                {...register("firstName")}
                placeholder="Enter first name"
              />
              <InputError error={errors.firstName} />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                {...register("lastName")}
                placeholder="Enter last name"
              />
              <InputError error={errors.lastName} />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.country} />
            </div>
            <div>
              <Label htmlFor="city">city</Label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="city">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.city} />
            </div>
            <div className="md:col-span-2 col-span-1">
              <Label htmlFor="currentPosition">My current position</Label>
              <Controller
                name="myCurrentPosition"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="currentPosition">
                      <SelectValue placeholder="Select current Position" />
                    </SelectTrigger>
                    <SelectContent>
                      {currentPosition.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.myCurrentPosition} />
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        {/* Expertise Information  */}
        <div className="">
          <h4 className="text-success uppercase font-medium">
            Expertise Information
          </h4>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div>
              <Label htmlFor="areaOfExpertise">Area of expertise</Label>
              <Controller
                name="areaOfExpertise"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="areaOfExpertise">
                      <SelectValue placeholder="Select area of expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      {areaOfExpertise.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.areaOfExpertise} />
            </div>
            <div>
              <Label htmlFor="whatICanDo">What i can do</Label>
              <Controller
                name="whatICanDo"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="whatICanDo">
                      <SelectValue placeholder="Select what i can do" />
                    </SelectTrigger>
                    <SelectContent>
                      {whatICanDo.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.whatICanDo} />
            </div>
            <div>
              <Label htmlFor="myGoalsIsTo">My goals is to</Label>
              <Controller
                name="myGoalsIsTo"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="myGoalsIsTo">
                      <SelectValue placeholder="Select my goals is to" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectDefault.map((item) => (
                        <SelectItem key={item.label} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.myGoalsIsTo} />
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        {/* Project Preferences  */}
        <div className="">
          <h4 className="text-success uppercase font-medium">
            Project Preferences
          </h4>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div>
              <Label htmlFor="workCompensationOptions">
                Work compensation options
              </Label>
              <Controller
                name="workCompensationsOptions"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="workCompensationOptions">
                      <SelectValue placeholder="Select work compensation options" />
                    </SelectTrigger>
                    <SelectContent>
                      {compensationOptions.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.workCompensationsOptions} />
            </div>
            <div>
              <Label htmlFor="projectSelectionProcess">
                Project Selection Process
              </Label>
              <Controller
                name="projectSelectionProcess"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="projectSelectionProcess">
                      <SelectValue placeholder="Select project selection process" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectionProcess.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.projectSelectionProcess} />
            </div>
            <div>
              <Label htmlFor="projectIntakeProcess">
                Project Intake Process
              </Label>
              <Controller
                name="projectIntakeProcess"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="projectIntakeProcess">
                      <SelectValue placeholder="Select project intake process" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectIntakeProcess.map((item) => (
                        <SelectItem key={item.label} value={item.label}>
                          {item.checkbox} {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.projectIntakeProcess} />
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        {/* Rate  */}
        <div className="">
          <h4 className="text-success uppercase font-medium">Rate</h4>
          <div className="grid md:grid-cols-6 grid-cols-1 gap-4 mt-4">
            <div className="md:col-span-3 col-span-1">
              <Label htmlFor="projectEngagementPreference">
                Project engagement preference
              </Label>
              <Controller
                name="projectEngagementPreference"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="projectEngagementPreference">
                      <SelectValue placeholder="Select project engagement preference" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectEngagementPreference.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.projectEngagementPreference} />
            </div>
            <div className="md:col-span-3 col-span-1">
              <Label htmlFor="currency">Currency</Label>
              <Controller
                name="currency"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {currency.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              ></Controller>
              <InputError error={errors.currency} />
            </div>
            <div className="md:col-span-2 col-span-1">
              <Label htmlFor="discoveryCall">Discovery call</Label>
              <Input
                type="text"
                {...register("discoveryCall")}
                id="discoveryCall"
                placeholder="Enter discovery call"
              />
              <InputError error={errors.discoveryCall} />
            </div>
            <div className="md:col-span-2 col-span-1">
              <Label htmlFor="consultation">Consultation</Label>
              <Input
                type="text"
                {...register("consultation")}
                id="consultation"
                placeholder="Enter consultation"
              />
              <InputError error={errors.consultation} />
            </div>
            <div className="md:col-span-2 col-span-1">
              <Label htmlFor="delivery">Delivery</Label>
              <Input
                type="text"
                {...register("delivery")}
                id="delivery"
                placeholder="Enter delivery"
              />
              <InputError error={errors.delivery} />
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        {/* Upload Photo  */}
         <FileUpload/>
        <div className="flex justify-end mt-6">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
export default ExpertsOnboardingPage;
