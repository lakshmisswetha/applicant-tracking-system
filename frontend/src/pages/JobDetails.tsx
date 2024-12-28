import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const JobDetails = () => {
    return (
        <div>
            <Tabs defaultValue="account" className=" flex flex-col mt-4">
                <TabsList className="flex justify-around p-6">
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
