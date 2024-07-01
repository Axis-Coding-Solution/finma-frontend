import { MainHeading, SectionHeading } from "@/pages/components/common";
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
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";
import { InputError } from "@/components/ui/input-error";
import {
  careerBackground,
  cities,
  communityGoals,
  countries,
  genderStatus,
  industry,
  startUpFounder,
} from "@/data/dashboard/innovators";
import {
  areaOfExpertise,
  currentEmploymentStatus,
} from "@/data/dashboard/experts";
import FileUpload from "@/components/ui/fileupload";
import { DatePicker } from "@/components/ui/date-picker";
import { useMutation } from "@tanstack/react-query";
import { errorToast, successToast } from "@/utils";
import { useNavigate } from "react-router-dom";

function InnovatorsOnboardingPage() {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingInnovatorsInitialValues,
  });

  const mutation = useMutation({
    // mutationFn: startOnboardingInnovators,
  });

  const onSubmitHandler = async (
    values: typeof onboardingInnovatorsInitialValues
  ) => {
    try {
      const res = await mutation.mutateAsync(values);
      successToast(res.message);
      navigate("/dashboard/overview", {
        replace: true,
      });
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6">
      <MainHeading
        heading="Lets create your innovator profile"
        paragraph="Please tell us about your expertise to help us set up your profile message. It will help innovators learn about your expertise and experience."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex   flex-col lg:flex-row items-start">
          {/* Upload Photo  */}

          <FileUpload />

          <div className="">
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
                  />
                  <InputError error={errors.personalInfo?.firstName} />
                </div>
                <div>
                  <Label htmlFor="personalInfo.lastName">Last Name</Label>
                  <Input
                    type="text"
                    id="personalInfo.lastName"
                    {...register("personalInfo.lastName")}
                  />
                  <InputError error={errors.personalInfo?.lastName} />
                </div>
                <div>
                  <Label htmlFor="personalInfo.country">Country</Label>
                  <Controller
                    name="personalInfo.country"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      >
                        <SelectTrigger id="personalInfo.country">
                          <SelectValue />
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
                  <Label htmlFor="personalInfo.city">City</Label>
                  <Controller
                    name="personalInfo.city"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      >
                        <SelectTrigger id="personalInfo.city">
                          <SelectValue />
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

                <div>
                  {" "}
                  <Label htmlFor="personalInfo.dateOfBirth">
                    {" "}
                    Date of Birth
                  </Label>
                  <Controller
                    name="personalInfo.dateOfBirth"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        showOutsideDays={false}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                      />
                    )}
                  />
                </div>

                <div className="w-full">
                  <Label htmlFor="personalInfo.gender"> Gender</Label>
                  <Controller
                    name="personalInfo.gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      >
                        <SelectTrigger id="personal-info-country">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {genderStatus.map((gender) => (
                            <SelectItem key={gender.value} value={gender.value}>
                              {gender.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="personalInfo.linkedInProfile">
                  LinkedIn profile
                </Label>
                <Input
                  type="text"
                  id="personalInfo.linkedInProfile"
                  {...register("personalInfo.linkedInProfile")}
                />
                <InputError error={errors.personalInfo?.linkedInProfile} />
              </div>
            </div>
            <hr className="border-secondary my-4" />
            {/* Professional Information  */}
            <div className="">
              <h4 className="text-success uppercase font-medium">
                Professional Information
              </h4>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="professionalInfo.areaOfExpertise">
                    Current employment status
                  </Label>
                  <Controller
                    name="professionalInfo.currentEmploymentStatus"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      >
                        <SelectTrigger id="professionalInfo.currentEmploymentStatus">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {currentEmploymentStatus.map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  ></Controller>
                  <InputError
                    error={errors.professionalInfo?.currentEmploymentStatus}
                  />
                </div>
                <div>
                  <Label htmlFor="professionalInfo.careerBackground">
                    Career background
                  </Label>
                  <Controller
                    name="professionalInfo.careerBackground"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      >
                        <SelectTrigger id="professionalInfo.careerBackground">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {careerBackground.map((item) => (
                            <SelectItem key={item.label} value={item.label}>
                              {item.checkbox} {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  ></Controller>
                  <InputError
                    error={errors.professionalInfo?.careerBackground}
                  />
                </div>
                <div>
                  <Label htmlFor="professionalInfo.skills">Skills</Label>
                  <Controller
                    name="professionalInfo.skills"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      >
                        <SelectTrigger id="professionalInfo.skills">
                          <SelectValue />
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
                  <InputError error={errors.professionalInfo?.skills} />
                </div>
                {/* <div>
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
            </div> */}
              </div>
            </div>
            <hr className="border-secondary my-4" />
            {/* Community information   */}
            <div className="">
              <h4 className="text-success uppercase font-medium">
                Community information
              </h4>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="communityInformation.entrepreneurialStage">
                    What best describes your entrepreneurial stage?
                  </Label>
                  <Controller
                    name="communityInformation.entrepreneurialStage"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      >
                        <SelectTrigger id="communityInformation.entrepreneurialStage">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {startUpFounder.map((item) => (
                            <SelectItem key={item.heading} value={item.heading}>
                              <div className="flex flex-col">
                                <div className="font-bold">{item.heading}</div>
                                <div>{item.subheading}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  ></Controller>
                  <InputError
                    error={errors.communityInformation?.entrepreneurialStage}
                  />
                </div>

                <div>
                  <Label htmlFor="communityInformation.communityGoals">
                    My community goals are
                  </Label>
                  <Controller
                    name="communityInformation.communityGoals"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      >
                        <SelectTrigger id="communityInformation.communityGoals">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {communityGoals.map((item) => (
                            <SelectItem key={item.label} value={item.label}>
                              {item.checkbox} {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  ></Controller>
                  <InputError
                    error={errors.communityInformation?.communityGoals}
                  />
                </div>

                <div>
                  <Label htmlFor="communityInformation.personalBio">
                    Personal bio (150 character only){" "}
                  </Label>
                  <Input
                    type="text"
                    id="communityInformation.personalBio"
                    {...register("communityInformation.personalBio")}
                    // placeholder="Enter first name"
                  />
                  <InputError
                    error={errors.communityInformation?.personalBio}
                  />
                </div>
                <div>
                  <Label htmlFor="communityInformation.dedicateToYourVenture">
                    How many hours per weeks can you dedicate to your
                    venture(s)?
                  </Label>
                  <Input
                    type="text"
                    id="communityInformation.dedicateToYourVenture"
                    {...register("communityInformation.dedicateToYourVenture")}
                    // placeholder="Enter first name"
                  />
                  <InputError
                    error={errors.communityInformation?.dedicateToYourVenture}
                  />
                </div>
              </div>
            </div>
            <hr className="border-secondary my-4" />
            {/* your entrepreneurial track-record */}
            <div className="">
              <SectionHeading heading="Your Entrepreneurial Track-Record" />
              <div className="flex  gap-4 mt-4">
                <div className="w-full">
                  <Label htmlFor="entrepreneurialTrackRecord.nameOfStratUp">
                    Name Of StartUp
                  </Label>
                  <Input
                    type="text"
                    id="entrepreneurialTrackRecord.nameOfStratUp"
                    {...register("entrepreneurialTrackRecord.nameOfStratUp")}
                  />
                  <InputError
                    error={errors.entrepreneurialTrackRecord?.nameOfStratUp}
                  />
                </div>

                <div className="w-full">
                  <Label htmlFor="entrepreneurialTrackRecord.industry">
                    Industry
                  </Label>
                  <Controller
                    name="entrepreneurialTrackRecord.industry"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                      >
                        <SelectTrigger id="entrepreneurialTrackRecord.industry">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {industry.map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  ></Controller>
                  <InputError
                    error={errors.entrepreneurialTrackRecord?.industry}
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <Label htmlFor="  entrepreneurialTrackRecord.aboutTheStartup">
                  About the startup (120 letter max)
                </Label>
                <Input
                  type="text"
                  id="  entrepreneurialTrackRecord.aboutTheStartup"
                  {...register("entrepreneurialTrackRecord.aboutTheStartup")}
                />
                <InputError
                  error={errors.entrepreneurialTrackRecord?.aboutTheStartup}
                />
              </div>

              <div className="flex gap-4">
                <div className="w-full mt-4">
                  <Label htmlFor="  entrepreneurialTrackRecord.yourRole">
                    Your Role
                  </Label>
                  <Input
                    type="text"
                    id="  entrepreneurialTrackRecord.yourRole"
                    {...register("entrepreneurialTrackRecord.yourRole")}
                  />
                  <InputError
                    error={errors.entrepreneurialTrackRecord?.yourRole}
                  />
                </div>
                <div className="w-full mt-4">
                  <Label htmlFor="  entrepreneurialTrackRecord.websiteLink">
                    Website link{" "}
                  </Label>
                  <Input
                    type="text"
                    id="  entrepreneurialTrackRecord.websiteLink"
                    {...register("entrepreneurialTrackRecord.websiteLink")}
                  />
                  <InputError
                    error={errors.entrepreneurialTrackRecord?.websiteLink}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row mt-4 gap-4">
                <div className="w-full lg:w-[60%] ">
                  <Label htmlFor="  entrepreneurialTrackRecord.numberOfEmployee">
                    Number of employees{" "}
                  </Label>
                  <Input
                    type="text"
                    id="  entrepreneurialTrackRecord.numberOfEmployee"
                    {...register("entrepreneurialTrackRecord.numberOfEmployee")}
                  />
                  <InputError
                    error={errors.entrepreneurialTrackRecord?.numberOfEmployee}
                  />
                </div>

                <div className="flex flex-col w-full lg:w-[40%] ">
                  <div>
                    <Label htmlFor="yearsOfOperations">
                      {" "}
                      Years of operations (from-to)
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Controller
                      name="entrepreneurialTrackRecord.yearsOfOperations"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          showOutsideDays={false}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          value={field.value}
                        />
                      )}
                    />
                    <Controller
                      name="entrepreneurialTrackRecord.yearsOfOperations"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          showOutsideDays={false}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          value={field.value}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className=" flex flex-col gap-2 w-full mt-4">
                  <div>
                    <Label htmlFor="  entrepreneurialTrackRecord.lastYearRevenue">
                      Last Year Revenue
                    </Label>
                  </div>

                  <div>
                    <div className="flex gap-4">
                      <Input
                        type="text"
                        id="  entrepreneurialTrackRecord.lastYearRevenue"
                        {...register(
                          "entrepreneurialTrackRecord.lastYearRevenue"
                        )}
                      />
                      <InputError
                        error={
                          errors.entrepreneurialTrackRecord?.lastYearRevenue
                        }
                      />

                      <Controller
                        name="entrepreneurialTrackRecord.yearsOfOperations"
                        control={control}
                        render={({ field }) => (
                          <DatePicker
                            showOutsideDays={false}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            value={field.value}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 w-full mt-4">
                  <div>
                    <Label htmlFor="  entrepreneurialTrackRecord.lastYearRevenue">
                      Last Year Revenue
                    </Label>
                  </div>

                  <div>
                    <div className="flex gap-4">
                      <Input
                        type="text"
                        id="  entrepreneurialTrackRecord.lastYearRevenue"
                        {...register(
                          "entrepreneurialTrackRecord.lastYearRevenue"
                        )}
                      />
                      <InputError
                        error={
                          errors.entrepreneurialTrackRecord?.lastYearRevenue
                        }
                      />

                      <Controller
                        name="entrepreneurialTrackRecord.yearsOfOperations"
                        control={control}
                        render={({ field }) => (
                          <DatePicker
                            showOutsideDays={false}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            value={field.value}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full mt-4">
                <Label htmlFor="  entrepreneurialTrackRecord.accomplishment">
                  Accomplishment
                </Label>
                <Input
                  type="text"
                  id="  entrepreneurialTrackRecord.accomplishment"
                  {...register("entrepreneurialTrackRecord.accomplishment")}
                />
                <InputError
                  error={errors.entrepreneurialTrackRecord?.accomplishment}
                />
              </div>
              <div className="w-full mt-4">
                <Label htmlFor="  entrepreneurialTrackRecord.companyLinkedIn">
                  Company LinkedIn
                </Label>
                <Input
                  type="text"
                  id="  entrepreneurialTrackRecord.companyLinkedIn"
                  {...register("entrepreneurialTrackRecord.companyLinkedIn")}
                  placeholder="https://www.linkedin.com/"
                />
                <InputError
                  error={errors.entrepreneurialTrackRecord?.companyLinkedIn}
                />
              </div>
            </div>
            <div className="flex flex-col justify-end items-end gap-4 mt-6">
              <div className="flex gap-1 text-muted-foreground text-sm">
                <span className="underline">Add startup</span>
                <span>+</span>
              </div>
              <Button type="submit">Next</Button>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
      </form>
    </div>
  );
}
export default InnovatorsOnboardingPage;
