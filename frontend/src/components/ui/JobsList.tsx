import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MdEdit } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";

export function JobsList() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="rounded-lg px-4  pt-4 bg-muted relative mb-3">
                <AccordionTrigger>
                    <div className="flex justify-between items-center">
                        <div className="text-xl">Content Writer</div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="relative">
                    <div className="flex flex-col mt-4 relative">
                        <div>Content - London, UK</div>
                        <div className="flex my-2 ">
                            <div className="mr-4">
                                Openings: <span className="text-amber-500">4</span>
                            </div>
                            <div className="mr-4">
                                Rejected: <span className="text-red-500">19</span>
                            </div>
                            <div>
                                Required: <span className="text-green-500">2</span>
                            </div>
                        </div>
                        <div className="flex mt-4 grid grid-cols-6 ">
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">69</div>
                                <div>Applications</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">50</div>
                                <div>Qualified Candidates</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">40</div>
                                <div>Interview stages</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">30</div>
                                <div>Evaluation</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6 p-4">
                                <div className="font-medium">4</div>
                                <div>Offers</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">2</div>
                                <div>Hired</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex mt-8 justify-between">
                        <div className="font-extralight italic">Last candidate applied: 4 hrs ago</div>

                        <div className="flex">
                            <div className="cursor-pointer flex hover:underline ">
                                <MdEdit className="text-xl " />
                                <div className="ml-1">Edit Job</div>
                            </div>
                            <div className="cursor-pointer flex ml-6 hover:underline">
                                <IoShareSocial className="text-xl" />
                                <div className="ml-1">Share Job</div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="rounded-lg px-4  pt-4 bg-muted relative mb-3">
                <AccordionTrigger>
                    <div className="flex justify-between items-center">
                        <div className="text-xl">Head of Finance</div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="relative">
                    <div className="flex flex-col mt-4 relative">
                        <div>Content - London, UK</div>
                        <div className="flex my-2 ">
                            <div className="mr-4">
                                Openings: <span className="text-amber-500">4</span>
                            </div>
                            <div className="mr-4">
                                Rejected: <span className="text-red-500">19</span>
                            </div>
                            <div>
                                Required: <span className="text-green-500">2</span>
                            </div>
                        </div>
                        <div className="flex mt-4 grid grid-cols-6 ">
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">69</div>
                                <div>Applications</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">50</div>
                                <div>Qualified Candidates</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">40</div>
                                <div>Interview stages</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">30</div>
                                <div>Evaluation</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6 p-4">
                                <div className="font-medium">4</div>
                                <div>Offers</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">2</div>
                                <div>Hired</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex mt-8 justify-between">
                        <div className="font-extralight italic">Last candidate applied: 4 hrs ago</div>

                        <div className="flex">
                            <div className="cursor-pointer flex hover:underline ">
                                <MdEdit className="text-xl " />
                                <div className="ml-1">Edit Job</div>
                            </div>
                            <div className="cursor-pointer flex ml-6 hover:underline">
                                <IoShareSocial className="text-xl" />
                                <div className="ml-1">Share Job</div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="rounded-lg px-4  pt-4 bg-muted relative mb-3">
                <AccordionTrigger>
                    <div className="flex justify-between items-center">
                        <div className="text-xl">Account Executive</div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="relative">
                    <div className="flex flex-col mt-4 relative">
                        <div>Content - London, UK</div>
                        <div className="flex my-2 ">
                            <div className="mr-4">
                                Openings: <span className="text-amber-500">4</span>
                            </div>
                            <div className="mr-4">
                                Rejected: <span className="text-red-500">19</span>
                            </div>
                            <div>
                                Required: <span className="text-green-500">2</span>
                            </div>
                        </div>
                        <div className="flex mt-4 grid grid-cols-6 ">
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">69</div>
                                <div>Applications</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">50</div>
                                <div>Qualified Candidates</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">40</div>
                                <div>Interview stages</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">30</div>
                                <div>Evaluation</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6 p-4">
                                <div className="font-medium">4</div>
                                <div>Offers</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-6  p-4">
                                <div className="font-medium">2</div>
                                <div>Hired</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex mt-8 justify-between">
                        <div className="font-extralight italic">Last candidate applied: 4 hrs ago</div>

                        <div className="flex">
                            <div className="cursor-pointer flex hover:underline ">
                                <MdEdit className="text-xl " />
                                <div className="ml-1">Edit Job</div>
                            </div>
                            <div className="cursor-pointer flex ml-6 hover:underline">
                                <IoShareSocial className="text-xl" />
                                <div className="ml-1">Share Job</div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
