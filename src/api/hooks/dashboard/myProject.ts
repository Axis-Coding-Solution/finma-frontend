import {
  addProjectApi,
  delProjectApi,
  editProjectApi,
  getProjectApiById,
  getProjectsApi,
} from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAddProjectMutation = () =>
  useMutation({
    mutationFn: addProjectApi,
    mutationKey: ["/project"],
  });
export const useEditProjectMutation = () =>
  useMutation({
    mutationFn: editProjectApi,
    mutationKey: ["/edit-project"],
  });

export const useGetProjects = () => {
  return useQuery({
    queryKey: ["/projects"],
    queryFn: getProjectsApi,
  });
};
export const useGetProjectById = (id: string) => {
  return useQuery({
    queryKey: ["/project-by-id", id],   
    queryFn: () => getProjectApiById(id),
  });
};

export const useDeleteProject = () => {
  return useMutation({
    mutationFn: delProjectApi,
    mutationKey: ["/delete-project"],
  });
};
