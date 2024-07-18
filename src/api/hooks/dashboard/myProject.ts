import { addProjectApi, delProjectApi, editProjectApi, getProjectsApi } from "@/api/http";
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
        queryFn: getProjectsApi,
        queryKey: ["/projects"],
    });
};

export const useDeleteProject = () => {
    return useMutation({
        mutationFn: delProjectApi,
        mutationKey: ["/delete-project"],
    });
};