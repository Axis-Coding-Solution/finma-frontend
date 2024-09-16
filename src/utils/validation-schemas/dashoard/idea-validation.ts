import { object, string } from "yup";

export const IdeaValidationSchema = (name: "problem" | "solution") =>
  object({
    [name]: string().label(`${name} statement`).required().max(120),
  });
