import { InputError } from "@/components/ui";
import { EntrepreneurialSlider } from "../entrepreneurial-slider";
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const OnboardingProfileEntrepreneurialTypeStep = ({
  errors,
  ...rest
}: any) => {

  
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role"); 
  console.log("role from query:", role);
  
  return (
    <div>
      <InputError error={errors} />
      <EntrepreneurialSlider {...rest} role={role} />
    </div>
  );
};
