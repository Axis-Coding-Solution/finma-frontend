import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import { useState } from "react";
import {
  genderStatus,
  cities,
  countries,
  currentPosition,
  careerBackground,
  startUpFounder,
  skills,
  workOnStartUp,
  participatingEvents,
  community,
} from "@/data/dashboard/innovators";
// import { register } from "module";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import FileUpload from "@/components/ui/fileupload";
import { yupResolver } from "@hookform/resolvers/yup";
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";
import { onboardingInnovatorsSchema } from "@/utils/validation-schemas/onboarding";

function InnovatorsOnboardingPage() {
  const { register, watch, control, handleSubmit } = useForm({
    defaultValues: onboardingInnovatorsInitialValues,
    // resolver: yupResolver(onboardingInnovatorsSchema),
  });

  console.log(watch("personalInfo.dateOfBirth"));
  const onSubmit = (values: typeof onboardingInnovatorsInitialValues) => {
    console.log(values);
  };

  const [step, setStep] = useState(1);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step == 1 && (
          <div>
            <MainHeading heading="Welcome to the community! Almost there." />
            <div className="flex justify-end items-end text-secondary">
              <span className="text-foreground font-semibold text-2xl">1</span>/
              <span>3</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2  mb-5">
                <div className="h-2 w-full rounded-full bg-primary"></div>
                <div className="h-2 w-full rounded-full bg-secondary"></div>
                <div className="h-2 w-full rounded-full bg-secondary"></div>
              </div>

              <p className="text-muted-foreground">
                Please provide your personal data to help us understand you
                better :)
              </p>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div>
                <Label htmlFor="firstName"> First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  {...register("personalInfo.firstName")}
                />
              </div>
              <div>
                <Label htmlFor="lastName"> Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  {...register("personalInfo.lastName")}
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth"> Date of Birth</Label>
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
                <Label htmlFor="gender"> Gender</Label>
                <Controller
                  name="personalInfo.gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger id="personal-info-country">
                        <SelectValue placeholder="Gender" />
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
              <div className="w-full">
                <Label htmlFor="country"> Country</Label>
                <Controller
                  name="personalInfo.country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger id="personal-info-country">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="w-full">
                <Label htmlFor="city">City</Label>

                <Controller
                  name="personalInfo.city"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger id="personal-info-country">
                        <SelectValue placeholder="City" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <div className="flex justify-end items-end mt-5">
                  <Button
                    type="submit"
                    variant="default"
                    onClick={() => setStep(2)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step == 2 && (
          <div>
            <MainHeading heading="Welcome to the community! Almost there." />
            <div className="flex justify-end items-end text-secondary">
              <span className="text-foreground font-semibold text-2xl">2</span>/
              <span>3</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2  mb-5">
                <div className="h-2 w-full rounded-full bg-primary"></div>
                <div className="h-2 w-full rounded-full bg-primary"></div>
                <div className="h-2 w-full rounded-full bg-secondary"></div>
              </div>

              <p className="text-muted-foreground">
                Please provide your professional data
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-5">
              <div>
                <Label htmlFor="professionalInfo.careerBackground">
                  {" "}
                  My career background
                </Label>
                <Controller
                  name="professionalInfo.careerBackground"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Design & Graphics" />
                      </SelectTrigger>
                      <SelectContent>
                        {careerBackground.map((career) => (
                          <SelectItem key={career.label} value={career.label}>
                            {career.checkbox} {career.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="professionalInfo.currentPosition">
                  Current position
                </Label>
                <Controller
                  name="professionalInfo.currentPosition"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Freelance" />
                      </SelectTrigger>
                      <SelectContent>
                        {currentPosition.map((position) => (
                          <SelectItem
                            key={position.label}
                            value={position.label}
                          >
                            {position.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="skills"> Skills (multiple selection)</Label>
                <Controller
                  name="professionalInfo.skills"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Technical (coding, engineering), Product design" />
                      </SelectTrigger>
                      <SelectContent>
                        {skills.map((skill) => (
                          <SelectItem key={skill.label} value={skill.label}>
                            {skill.checkbox} {skill.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="w-full">
                <div className="flex justify-end items-end mt-5">
                  <Button
                    type="submit"
                    variant="default"
                    onClick={() => setStep(3)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {step == 3 && (
          <div>
            <MainHeading heading="Welcome to the community! Almost there." />
            <div className="flex justify-end items-end text-secondary">
              <span className="text-foreground font-semibold text-2xl">3</span>/
              <span>3</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2  mb-5">
                <div className="h-2 w-full rounded-full bg-primary"></div>
                <div className="h-2 w-full rounded-full bg-primary"></div>
                <div className="h-2 w-full rounded-full bg-primary"></div>
              </div>

              <p className="text-muted-foreground">
                Please provide additional info about your entrepreneurial
                experience
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-5">
              <div>
                <Label htmlFor="experience.currentFocusAsStartup">
                  What describes your current focus and goals as a startup
                  founder?
                </Label>

                <Controller
                  name="experience.currentFocusAsStartup"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Early-Stage Dreamers: I have a great idea and am looking to explore its poten..." />
                      </SelectTrigger>
                      <SelectContent>
                        {startUpFounder.map((founder) => (
                          <SelectItem
                            key={founder.heading}
                            value={founder.heading}
                          >
                            <div className="flex flex-col">
                              <div className="font-bold">
                                {" "}
                                {founder.heading}{" "}
                              </div>
                              <div>{founder.subheading}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="experience.mainGoals">
                  What are your main goals for joining our community?
                </Label>
                <Controller
                  name="experience.mainGoals"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Networking with other founders, Seeking mentorship" />
                      </SelectTrigger>
                      <SelectContent>
                        {community.map((community) => (
                          <SelectItem
                            key={community.label}
                            value={community.label}
                          >
                            {community.checkbox} {community.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="experience.communityEvents">
                  Would you be interested in participating in community events
                  in your city
                </Label>
                <Controller
                  name="experience.communityEvents"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Workshops" />
                      </SelectTrigger>
                      <SelectContent>
                        {workOnStartUp.map((startup) => (
                          <SelectItem key={startup.label} value={startup.label}>
                            {startup.checkbox} {startup.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="experience.previouslyLaunched">
                  Have you previously launched or worked on a startup?
                </Label>
                <Controller
                  name="experience.previouslyLaunched"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="No" />
                      </SelectTrigger>
                      <SelectContent>
                        {participatingEvents.map((event) => (
                          <SelectItem key={event.label} value={event.label}>
                            {event.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="w-full">
                <div className="flex justify-end items-end mt-5">
                  <Button
                    type="submit"
                    variant="default"
                    onClick={() => setStep(4)}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {step == 4 && (
          <div>
            <MainHeading heading="Last step" />

            <p className="text-muted-foreground">
              Please add your profile photo
            </p>
            <FileUpload />
          </div>
        )}
      </form>
    </>
  );
}
export default InnovatorsOnboardingPage;
