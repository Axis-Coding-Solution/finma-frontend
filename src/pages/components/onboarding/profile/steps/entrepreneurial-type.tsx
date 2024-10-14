import { InputError } from "@/components/ui";
import { EntrepreneurialSlider } from "./entrepreneurial-slider";
import { useSearchParams } from "react-router-dom";

export const OnboardingProfileEntrepreneurialTypeStep = ({
  errors,
  ...rest
}: any) => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  return (
    <div>
      <InputError error={errors.entrepreneurType} />
      <EntrepreneurialSlider {...rest} role={role} />
    </div>
  );
};
