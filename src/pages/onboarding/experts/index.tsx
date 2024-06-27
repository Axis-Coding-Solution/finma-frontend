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
import { cities, countries } from "@/data/dashboard/innovators";
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

    resolver: yupResolver(onboardingExpertsSchema),
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
              <Label htmlFor="personalInfo.firstName">First Name</Label>
              <Input
                type="text"
                id="personalInfo.firstName"
                {...register("personalInfo.firstName")}
                placeholder="Enter first name"
              />
              <InputError error={errors.personalInfo?.firstName} />
            </div>
            <div>
              <Label htmlFor="personalInfo.lastName">Last Name</Label>
              <Input
                type="text"
                id="personalInfo.lastName"
                {...register("personalInfo.lastName")}
                placeholder="Enter last name"
              />
              <InputError error={errors.personalInfo?.lastName} />
            </div>
            <div>
              <Label htmlFor="perpersonalInfo.country">Country</Label>
              <Controller
                name="personalInfo.country"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="personalInfo.country">
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
              <InputError error={errors.personalInfo?.country} />
            </div>
            <div>
              <Label htmlFor="personalInfo.city">city</Label>
              <Controller
                name="personalInfo.city"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="personalInfo.city">
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
              <InputError error={errors.personalInfo?.city} />
            </div>
            <div className="md:col-span-2 col-span-1">
              <Label htmlFor="personalInfo.currentPosition">
                My current position
              </Label>
              <Controller
                name="personalInfo.currentPosition"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="personalInfo.currentPosition">
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
              <InputError error={errors.personalInfo?.currentPosition} />
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
              <Label htmlFor="professionalInfo.areaOfExpertise">
                Area of expertise
              </Label>
              <Controller
                name="professionalInfo.areaOfExpertise"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="professionalInfo.areaOfExpertise">
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
              <InputError error={errors.professionalInfo?.areaOfExpertise} />
            </div>
            <div>
              <Label htmlFor="professionalInfo.canDo">What i can do</Label>
              <Controller
                name="professionalInfo.canDo"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="professionalInfo.canDo">
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
              <InputError error={errors.professionalInfo?.canDo} />
            </div>
            <div>
              <Label htmlFor="professionalInfo.goals">My goals is to</Label>
              <Controller
                name="professionalInfo.goals"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="professionalInfo.goals">
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
              <InputError error={errors.professionalInfo?.goals} />
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
              <Label htmlFor="experience.compensationOption">
                Work compensation options
              </Label>
              <Controller
                name="experience.compensationOption"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="experience.compensationOption">
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
              <InputError error={errors.experience?.compensationOption} />
            </div>
            <div>
              <Label htmlFor="experience.projSelectionOption">
                Project Selection Process
              </Label>
              <Controller
                name="experience.projSelectionOption"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="experience.projSelectionOption">
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
              <InputError error={errors.experience?.projSelectionOption} />
            </div>
            <div>
              <Label htmlFor="experience.projIntakeProcess">
                Project Intake Process
              </Label>
              <Controller
                name="experience.projIntakeProcess"
                control={control}
                render={({ field }) => (
                  <Select
                    // isMulti
                    // value={}
                    // options={projectIntakeProcess}
                    // value={}
                    // value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="experience.projIntakeProcess">
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
              <InputError error={errors.experience?.projIntakeProcess} />
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        {/* Rate  */}
        <div className="">
          <h4 className="text-success uppercase font-medium">Rate</h4>
          <div className="grid md:grid-cols-6 grid-cols-1 gap-4 mt-4">
            <div className="md:col-span-3 col-span-1">
              <Label htmlFor="rate.projEngagementPref">
                Project engagement preference
              </Label>
              <Controller
                name="rate.projEngagementPref"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="rate.projEngagementPref">
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
              <InputError error={errors.rate?.projEngagementPref} />
            </div>
            <div className="md:col-span-3 col-span-1">
              <Label htmlFor="rate.currency">Currency</Label>
              <Controller
                name="rate.currency"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="rate.currency">
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
              <InputError error={errors.rate?.currency} />
            </div>
            <div className="md:col-span-2 col-span-1">
              <Label htmlFor="rate.discoverCall">Discovery call</Label>
              <Input
                type="text"
                {...register("rate.discoverCall")}
                id="rate.discoverCall"
                placeholder="Enter discovery call"
              />
              <InputError error={errors.rate?.discoverCall} />
            </div>
            <div className="md:col-span-2 col-span-1">
              <Label htmlFor="rate.consultation">Consultation</Label>
              <Input
                type="text"
                {...register("rate.consultation")}
                id="rate.consultation"
                placeholder="Enter consultation"
              />
              <InputError error={errors.rate?.consultation} />
            </div>
            <div className="md:col-span-2 col-span-1">
              <Label htmlFor="rate.delivery">Delivery</Label>
              <Input
                type="text"
                {...register("rate.delivery")}
                id="rate.delivery"
                placeholder="Enter delivery"
              />
              <InputError error={errors.rate?.delivery} />
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        {/* Upload Photo  */}
        <FileUpload />
        <div className="flex justify-end mt-6">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
export default ExpertsOnboardingPage;
