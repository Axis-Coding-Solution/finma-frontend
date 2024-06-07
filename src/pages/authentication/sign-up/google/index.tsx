import { getSignUpWithGoogle } from "@/api/http";
import { useQuery } from "@tanstack/react-query";

const SignUpWithGoogle = () => {
  const { data } = useQuery({
    queryKey: ["getSignUpWithGoogle"],
    queryFn: getSignUpWithGoogle,
  });

  console.log(data);
  return <div>SignUpWithGoogle</div>;
};

export default SignUpWithGoogle;
