import { mixed, object, string } from "yup";

export const dashboardStartUpSchema = object({
  name: string().trim().label("name").required(),
  industry: string().optional(),
  logoImage: mixed().label("logoImage").required(),
  bio: string().optional(),
});
