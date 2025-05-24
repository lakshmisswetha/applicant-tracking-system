import { Button } from "@/components/ui/button";
import { useJobs } from "@/hooks/useJobs";
import { formatDistanceToNow } from "date-fns";

export const JobList = () => {
    const { data, isLoading, isError } = useJobs();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Failed to load jobs</div>;
    }

    return (
        <div className="flex flex-wrap ">
            {data?.data?.map((job: any) => (
                <div
                    key={job.jobId}
                    className="rounded-lg p-6 bg-muted flex flex-col justify-between m-4 cursor-pointer w-[30%] h-[230px] "
                >
                    <div className="flex flex-col">
                        <div className="text-xl font-medium">{job.jobTitle}</div>
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
                        <Button variant="outline">View Details</Button>
                        <Button className="hover:bg-zinc-400">Apply Now</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
