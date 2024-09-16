import { mixed, object, string } from "yup";

export const dashboardStartUpSchema = object({
  name: string().trim().label("Name").required(),
  industry: object()
    .label("Industry")
    .required()
    .nullable("Industry is required!"),
  logo: mixed().label("Logo").required(),
  bio: string().max(120, "Bio cannot exceed 120 characters.").optional(),
});
