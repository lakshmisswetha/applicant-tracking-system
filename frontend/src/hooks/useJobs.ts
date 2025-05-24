import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/components/modules/Jobs-List/jobList.api";

export const useJobs = () => {
    return useQuery({
        queryKey: ["jobs"],
        queryFn: fetchAllJobs,
    });
};
