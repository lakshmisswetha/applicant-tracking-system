import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { JobsList } from "@/components/ui/JobsList";

const Jobs = () => {
    return (
        <div className="mt-2 flex flex-col">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="drafts">Drafts</SelectItem>
                </SelectContent>
            </Select>
            <ul className="mt-8">
                <JobsList />
            </ul>
        </div>
    );
};

export default Jobs;
