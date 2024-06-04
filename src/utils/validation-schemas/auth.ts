import { string, object, boolean } from "@/utils/constants";

export const loginSchema = object({
  email: string().label("Email").required().email(),
  password: string().label("Password").required(),
});

export const signUpSchema = object({
  email: string().label("Email").required().email(),
  password: string().label("Password").required().trim().min(8).max(64),
  isAgree: boolean()
    .required()
    .isTrue("Please agree with terms and conditions!"),
});
