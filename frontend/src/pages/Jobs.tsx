import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { JobList } from "@/components/modules/Jobs-List/JobList";
import { Input } from "@/components/ui/input";
import JobSheet from "@/components/modules/Job-Sheet";
import { useUserRole } from "@/hooks/useUserRole";
import { useState } from "react";

const Jobs = () => {
    const role = useUserRole();
    const [searchQuery, setSearchQuery] = useState("");
    const [jobTypeFilter, setJobTypeFilter] = useState("all");
    return (
        <div className="flex flex-col">
            <div className="header bg-white flex justify-between items-center px-[280px] py-2 bg-muted fixed w-full shadow-sm">
                <div className="font-bold text-xl">Jobs</div>
                {role == "admin" && (
                    <Select onValueChange={setJobTypeFilter}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Job Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="open">Open</SelectItem>
                            <SelectItem value="drafts">Drafts</SelectItem>
                        </SelectContent>
                    </Select>
                )}
                <Input
                    placeholder="Search by job or location"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[280px]"
                />

                <JobSheet />
            </div>

            <div className="w-full overflow-y-auto px-[280px] py-[70px]">
                <JobList searchQuery={searchQuery} jobType={role === "candidate" ? "all" : jobTypeFilter} />
            </div>
        </div>
    );
};

export default Jobs;
