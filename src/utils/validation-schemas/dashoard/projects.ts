import { mixed, object, string } from "yup";

export const dashboardProjectsSchema = object({
    name: string().label('Name').trim().required(),
    tagline: string().optional(),
    logoImage: mixed().label('Logo').required(),
    bio: string().optional(),
})
