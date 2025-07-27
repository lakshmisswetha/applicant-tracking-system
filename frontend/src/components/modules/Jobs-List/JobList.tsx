import { Button } from "@/components/ui/button";
import { useJobs } from "@/hooks/useJobs";
import { useUserRole } from "@/hooks/useUserRole";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { deleteJobById } from "./jobList.api";
import { Loader2 } from "lucide-react";

export const JobList = ({ searchQuery, jobType }: { searchQuery: string; jobType: string }) => {
    const role = useUserRole();
    const { data, isLoading, isError } = useJobs();

    const filteredJobs = data?.data?.filter((job: any) => {
        const matchesSearch =
            job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.location.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesType =
            jobType === "all" ||
            (jobType === "open" && job.status === "open") ||
            (jobType === "drafts" && job.status === "draft");

        return matchesSearch && matchesType;
    });

    const queryClient = useQueryClient();
    const deleteJobMutation = useMutation({
        mutationFn: (jobId: number) => deleteJobById(jobId),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["jobs"] }),
        onError: (err: any) => alert(err.message),
    });

    const handleDelete = (jobId: number) => {
        if (confirm("Are you sure you want to delete this job?")) {
            deleteJobMutation.mutate(jobId);
        }
    };

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-10 w-10 animate-spin text-cyan-700" />
            </div>
        );

    if (isError) {
        return <div>Failed to load jobs</div>;
    }

    return (
        <div className="flex flex-col lg:flex-wrap lg:flex-row gap-6">
            {filteredJobs.length === 0 ? (
                <div className="text-center w-full text-gray-500 py-10 text-lg">No jobs found.</div>
            ) : (
                filteredJobs.map((job: any) => (
                    <div
                        key={job.jobId}
                        className="rounded-lg bg-white p-6 flex flex-col justify-between cursor-pointer w-[300px] h-[230px] "
                    >
                        <div className="flex flex-col">
                            <div className="text-xl font-medium text-cyan-900">{job.jobTitle}</div>
                            <div className="flex items-center">
                                <div className="text-sm underline">{job.companyName}</div>
                                <div className="ml-1">|</div>
                                <div className="text-sm ml-1">{job.location}</div>
                            </div>
                        </div>

                        <div className="flex mt-4 flex justify-between">
                            <div>{job.salary}</div>
                            <div>{formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}</div>
                        </div>
                        <div className="flex justify-between">
                            <Link to={`/jobdetails/${job.jobId}`}>
                                <Button className="bg-cyan-900 hover:bg-cyan-700">
                                    {role == "candidate" ? "Apply now" : "View applicants"}
                                </Button>
                            </Link>

                            <Button
                                className={role == "admin" ? "hover:bg-neutral-100 " : "invisible"}
                                onClick={role === "candidate" ? undefined : () => handleDelete(job.jobId)}
                                disabled={deleteJobMutation.isPending}
                                variant={"outline"}
                            >
                                Delete Job
                            </Button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
