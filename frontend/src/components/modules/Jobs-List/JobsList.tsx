import { Button } from "@/components/ui/button";

export function JobsList() {
    return (
        <div className="flex flex-wrap ">
            <div className="rounded-lg p-6 bg-muted flex flex-col justify-between m-4 cursor-pointer w-[30%] h-[230px] ">
                <div className="flex flex-col">
                    <div className="text-xl font-medium">Content Writer</div>
                    <div className="flex items-center">
                        <div className="text-sm underline">Square Space</div>
                        <div className="ml-1">|</div>
                        <div className="text-sm ml-1">London</div>
                    </div>
                </div>

                <div className="flex mt-4 flex justify-between">
                    <div>123$/month</div>
                    <div>5h ago</div>
                </div>
                <div className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button className="hover:bg-zinc-400">Apply Now</Button>
                </div>
            </div>
            <div className="rounded-lg p-6 bg-muted flex flex-col justify-between m-4 cursor-pointer w-[30%] h-[230px]">
                <div className="flex flex-col">
                    <div className="text-xl font-medium">Content Writer</div>
                    <div className="flex items-center">
                        <div className="text-sm underline">Square Space</div>
                        <div className="ml-1">|</div>
                        <div className="text-sm ml-1">London</div>
                    </div>
                </div>

                <div className="flex mt-4 flex justify-between">
                    <div>123$/month</div>
                    <div>5h ago</div>
                </div>
                <div className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button className="hover:bg-zinc-400">Apply Now</Button>
                </div>
            </div>
            <div className="rounded-lg p-6 bg-muted flex flex-col justify-between m-4 cursor-pointer w-[30%] h-[230px]">
                <div className="flex flex-col">
                    <div className="text-xl font-medium">Content Writer</div>
                    <div className="flex items-center">
                        <div className="text-sm underline">Square Space</div>
                        <div className="ml-1">|</div>
                        <div className="text-sm ml-1">London</div>
                    </div>
                </div>

                <div className="flex mt-4 flex justify-between">
                    <div>123$/month</div>
                    <div>5h ago</div>
                </div>
                <div className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button className="hover:bg-zinc-400">Apply Now</Button>
                </div>
            </div>
            <div className="rounded-lg p-6 bg-muted flex flex-col justify-between m-4 cursor-pointer w-[30%] h-[230px]">
                <div className="flex flex-col">
                    <div className="text-xl font-medium">Content Writer</div>
                    <div className="flex items-center">
                        <div className="text-sm underline">Square Space</div>
                        <div className="ml-1">|</div>
                        <div className="text-sm ml-1">London</div>
                    </div>
                </div>

                <div className="flex mt-4 flex justify-between">
                    <div>123$/month</div>
                    <div>5h ago</div>
                </div>
                <div className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button className="hover:bg-zinc-400">Apply Now</Button>
                </div>
            </div>
        </div>
    );
}
