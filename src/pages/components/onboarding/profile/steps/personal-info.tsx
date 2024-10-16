import { useGetCountriesQuery, useGetCountryCitiesMutation } from "@/api/hooks";
import { FloatingInput, InputError, ReactSelect } from "@/components/ui";
import { ReactAsyncSelect } from "@/components/ui/react-async-select";
import { UploadImage } from "@/pages/components/common";
import { useEffect } from "react";

export const OnboardingProfilePersonalInfoStep = ({
  country,
  setValue,
  resetField,
  control,
  errors,
  register,
  watch,
  Controller,
}: any) => {
  const countryCode = country?.value;
  const { data: countries, isLoading: countriesLoading } =
    useGetCountriesQuery();

  const { mutateAsync, data: cities } = useGetCountryCitiesMutation();

  useEffect(() => {
    if (Array.isArray(cities) && cities.length === 0) {
      setValue("personalInfo.city", {
        value: "N/A",
        label: "N/A",
      });
    }
  }, [cities]);

  const fetchCitiesOptions = async (inputText: string) => {
    if (inputText.length > 2 && countryCode) {
      const res = await mutateAsync({ search: inputText, code: countryCode });
      return res.data;
    }
    return [];
  };

  const noOptionMessage = ({ inputValue }: { inputValue: string }) => (
    <div>
      {countryCode
        ? inputValue.length < 3
          ? "Please search your city!"
          : "No City found against search!"
        : "Please select your country!"}
    </div>
  );

  const profileImage = watch("profilePhoto");

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-14 gap-12">
      <div className="md:col-span-2 col-span-1 ">
        <UploadImage
          control={control}
          errors={errors}
          image={profileImage}
          register={register}
          name="profilePhoto"
          text="Upload Phot"
        />
      </div>
      <div className="col-span-1">
        <Controller
          name="firstName"
          control={control}
          render={({ field }: any) => (
            <FloatingInput {...field} label="First Name" />
          )}
        />

        <InputError error={errors.firstName} />
      </div>
      <div className="col-span-1">
        <Controller
          name="lastName"
          control={control}
          render={({ field }: any) => (
            <FloatingInput {...field} label="Last Name" />
          )}
        />

        <InputError error={errors.lastName} />
      </div>
      <div className="col-span-1">
        <Controller
          name="country"
          control={control}
          render={({ field }: any) => (
            <ReactSelect
              {...field}
              onChange={(e) => {
                resetField("personalInfo.city");
                field.onChange(e);
              }}
              label="Country"
              placeholder=""
              options={countries}
              isLoading={countriesLoading}
            />
          )}
        />
        <InputError error={errors.country} />
      </div>
      <div className="col-span-1">
        <Controller
          name="city"
          key={country?.value ?? null}
          control={control}
          render={({ field }: any) => (
            <ReactAsyncSelect
              {...field}
              label="City"
              key={country?.value ?? null}
              placeholder=""
              cacheOptions
              defaultOptions
              noOptionsMessage={noOptionMessage}
              loadOptions={fetchCitiesOptions}
            />
          )}
        />
        <InputError error={errors.city} />
      </div>
    </div>
  );
};
