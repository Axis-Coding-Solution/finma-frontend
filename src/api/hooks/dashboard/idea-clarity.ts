import { addIdeaClarityApi, getIdeaClarityByProjectApi } from "@/api/http/dashboard/idea-clarity";
import { useMutation, useQuery } from "@tanstack/react-query";


export const useAddIdeaClarityMutation = () =>
    useMutation({
        mutationFn: addIdeaClarityApi,
        mutationKey: ["/idea-clarity"],
    });

export const useGetIdeaClarityProject = (id: string) => {
    return useQuery({
        queryFn: () => getIdeaClarityByProjectApi(id),
        queryKey: ["/idea-clarity/project", id],
    });
};
