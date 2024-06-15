import { string, object, boolean, ref } from "@/utils/constants";

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

export const forgetPasswordSchema = object({
  email: string().label("Email").required().email(),
});

export const resetPasswordSchema = object({
  id: string().trim().label("Id").required(),
  token: string().trim().label("Token").required(),
  password: string().label("Password").required(),
  confirmPassword: string()
    .label("Confirm Password")
    .required()
    .oneOf([ref("password")], "Passwords must match!"),
});


