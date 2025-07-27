import { fetchJobWithCandidates } from "@/components/modules/Job-Details/jobDetails.api";
import { IApplication } from "@/types/application";
import { Job } from "@/types/job";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// export const useJobDetails = () => {
//     const { jobId } = useParams();
//     return useQuery({
//         queryKey: ["job", Number(jobId)],
//         queryFn: () => fetchJobWithCandidates(jobId!),
//         enabled: !!jobId,
//     });
// };
type JobWithCandidates = {
    status: boolean;
    data: {
        job: Job;
        candidates: IApplication[];
    };
};

export const useJobDetails = () => {
    const { jobId } = useParams();

    return useQuery<JobWithCandidates>({
        queryKey: ["job-with-candidates", Number(jobId)],
        queryFn: () => fetchJobWithCandidates(jobId!),
        enabled: !!jobId,
    });
};
