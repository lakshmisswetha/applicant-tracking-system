import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import JobSheet from "@/components/modules/Job-Sheet";
import { useQuery } from "@tanstack/react-query";
import { fetchJobById } from "./jobDetails.api";

const JobDetails = () => {
    const { jobId } = useParams();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["job", Number(jobId)],
        queryFn: () => fetchJobById(jobId!),
        enabled: !!jobId,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError || !data?.status) return <div>Failed to load job stats</div>;

    const job = data.data;

    return (
        <div>
            <div className="header flex justify-between items-center px-[250px] py-2 bg-muted fixed w-full z-10 shadow-sm">
                <div className="font-bold text-xl">{job.jobTitle}</div>

                <JobSheet jobToEdit={job} />
            </div>
            <Tabs defaultValue="application-review" className=" flex flex-col mt-4 flex-1  px-[250px]">
                <TabsList className="flex justify-around p-6 mt-20">
                    <TabsTrigger value="application-review" className="px-6 py-2">
                        Application Review
                    </TabsTrigger>
                    <TabsTrigger value="interview" className="px-6 py-2">
                        Personal Interview
                    </TabsTrigger>
                    <TabsTrigger value="doc-verification" className="px-6 py-2">
                        Document Verification
                    </TabsTrigger>
                    <TabsTrigger value="background-check" className="px-6 py-2">
                        Background Check
                    </TabsTrigger>
                    <TabsTrigger value="hired" className="px-6 py-2">
                        Hired
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="application-review">
                    <Table className="mt-6">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[350px]">Name</TableHead>
                                <TableHead>Candidate Id</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Brooklyn Simmons</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alexander Miller</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>In Progress</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Benjamin Lee</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>In Progress</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Andrew Rodriguez</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>On Hold</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alexander Miller</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>In Progress</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Benjamin Lee</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>In Progress</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>

                <TabsContent value="interview">
                    <Table className="mt-6">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[350px]">Name</TableHead>
                                <TableHead>Candidate Id</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Brooklyn Simmons</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">Andrew Rodriguez</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>On Hold</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Brooklyn Simmons</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>

                <TabsContent value="doc-verification">
                    <Table className="mt-6">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[350px]">Name</TableHead>
                                <TableHead>Candidate Id</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">Brooklyn Simmons</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>

                <TabsContent value="background-check">
                    <Table className="mt-6">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[350px]">Name</TableHead>
                                <TableHead>Candidate Id</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Brooklyn Simmons</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Alberta Flores</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell className="flex">
                                    <Button variant="destructive">Reject</Button>
                                    <Button className="ml-3 bg-emerald-500 hover:bg-emerald-500">Next Stage</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>

                <TabsContent value="hired">
                    <Table className="mt-6">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[350px]">Name</TableHead>
                                <TableHead>Candidate Id</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="font-bold text-lg text-emerald-500">
                                <TableCell>Brooklyn Simmons</TableCell>
                                <TableCell>1124156</TableCell>
                                <TableCell>Completed</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default JobDetails;
