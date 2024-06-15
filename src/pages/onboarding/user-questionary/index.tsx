import { FORM_MODE, countriesOptions, yupResolver } from "@/utils/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MainHeading } from "@/pages/components/common";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { saveUserQuestionaryApi } from "@/api/http";
import { useMutation } from "@tanstack/react-query";
import { errorToast, successToast } from "@/utils";
import { InputError } from "@/components/ui/input-error";
import { FormGroup } from "@/components/ui/form-group";
import { userQuestionaryInitialValues } from "@/utils/initial-values";
import { userQuestionarySchema } from "@/utils/validation-schemas/onboarding";
import { useNavigate } from "react-router-dom";
import { ArrowPic } from "@/assets/images";

const professionalStatus = [
  { value: "quitMyJob", label: "Contemplating to quit my job" },
  { value: "unEmployed", label: "I left my job already (Unemployed)" },
  { value: "business", label: "I own a business" },
  { value: "partTime", label: "I work part-time" },
  { value: "retired", label: "Retired" },
  { value: "other", label: "other" },
];

const financialStatus = [
  { value: "mortgage", label: "I pay a mortgage" },
  { value: "technicalSupport", label: "I receive technical support" },
  { value: "saveMoney", label: "I am able to save money" },
  { value: "otherVentures", label: "I am investing in other ventures" },
  { value: "financialMarket", label: "I am investing in financial market" },
];

const familyStatus = [
  { value: "relationship", label: "I am in a relationship" },
  { value: "kids", label: "I have kids" },
  { value: "other", label: "Other" },
];

const UserQuestionaryPage = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: saveUserQuestionaryApi,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: userQuestionaryInitialValues,
    resolver: yupResolver(userQuestionarySchema),
  });

  const onSubmitHandler = async (
    values: typeof userQuestionaryInitialValues
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
    <div className="lg:flex flex-col lg:flex-row lg:gap-16 gap-10 bg-background h-full rounded-lg px-3 py-6 lg:items-center items-start">
      <img
        src={ArrowPic}
        className="lg:rotate-0 rotate-90  lg:w-96 md:w-32 w-20 lg:h-96 md:h-32 h-20 lg:mt-20 mt-0 lg:mb-0 mb-6"
      />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-5 w-full xl:w-1/2"
      >
        <MainHeading
          heading="Almost there..."
          paragraph="Please provide your personal data to help us understand you better :)"
        />
        <FormGroup>
          <Label htmlFor="personal-info-country">I Live in</Label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger id="personal-info-country">
                  <SelectValue placeholder="I live in" />
                </SelectTrigger>
                <SelectContent>
                  {countriesOptions.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.country} />
        </FormGroup>

        <FormGroup>
          <Label>My professional status</Label>
          <Controller
            name="professionalStatus"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="My professional status" />
                </SelectTrigger>
                <SelectContent>
                  {professionalStatus.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.professionalStatus} />
        </FormGroup>

        <FormGroup>
          <Label>My financial status</Label>
          <Controller
            name="financialStatus"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="My Financial status" />
                </SelectTrigger>
                <SelectContent>
                  {financialStatus.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.financialStatus} />
        </FormGroup>

        <FormGroup>
          <Label>My family status</Label>
          <Controller
            name="familyStatus"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="My family status" />
                </SelectTrigger>
                <SelectContent>
                  {familyStatus.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.familyStatus} />
        </FormGroup>
        <div className="text-end">
          <Button type="submit">Go to Dashboard</Button>
        </div>
      </form>
    </div>
  );
};

export default UserQuestionaryPage;
