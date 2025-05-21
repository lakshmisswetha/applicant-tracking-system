import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { JobsList } from "@/components/modules/Jobs-List/JobsList";
import { Input } from "@/components/ui/input";
import JobSheet from "@/components/modules/Job-Sheet";

const Jobs = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="header flex justify-between items-center px-[250px] py-2 bg-muted fixed w-full z-10 shadow-sm">
                <div className="font-bold text-xl">Jobs</div>
                <div className="">
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
                </div>
                <Input className="w-[450px] bg-muted-foreground/10" />
                <JobSheet />
            </div>

            <div className="flex-1 overflow-auto px-[250px]  mt-20">
                <JobsList />
            </div>
        </div>
    );
};

export default Jobs;
