import { InputError } from "@/components/ui";
import { EntrepreneurialSlider } from "../entrepreneurial-slider";

export const OnboardingProfileEntrepreneurialTypeStep = ({
  errors,
  ...rest
}: any) => {
  return (
    <div>
      <InputError error={errors} />
      <EntrepreneurialSlider {...rest} />
    </div>
  );
};
