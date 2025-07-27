import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import JobSheet from "@/components/modules/Job-Sheet";

import { Badge } from "@/components/ui/badge";
import { useJobDetails } from "@/hooks/useJobDetails";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCandidateStatus } from "./jobDetails.api";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

const JobDetailsAdmin = () => {
    const { jobId } = useParams();
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useJobDetails();

    const mutation = useMutation({
        mutationFn: ({ applicationId, stage, status }: { applicationId: number; stage: string; status: string }) =>
            updateCandidateStatus(applicationId, stage, status),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["job-with-candidates", Number(jobId)],
            });
        },
    });

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-10 w-10 animate-spin text-cyan-700" />
            </div>
        );
    if (isError || !data?.status) return <div>Failed to load job stats</div>;
    const job = data.data.job;
    const candidates = data?.data.candidates ?? [];

    const applicationReview = candidates.filter((c) => c.stage === "application-review");
    const interview = candidates.filter((c) => c.stage === "interview");
    const documentVerification = candidates.filter((c) => c.stage === "doc-verification");
    const backgroundCheck = candidates.filter((c) => c.stage === "background-check");
    const hired = candidates.filter((c) => c.stage === "hired");

    return (
        <div>
            <div className="header flex justify-between items-center px-[250px] py-2 bg-white fixed w-full z-10 shadow-sm">
                <div className="font-bold text-xl">{job.jobTitle}</div>

                <JobSheet jobToEdit={job} />
            </div>
            <Tabs defaultValue="application-review" className=" flex flex-col mt-4 flex-1  px-[250px]">
                <TabsList className="flex justify-around p-6 mt-20">
                    <TabsTrigger value="application-review" className="px-6 py-2 flex">
                        Application Review{" "}
                        <Badge className="ml-2 min-w-5 text-center rounded-full px-1 justify-center font-mono tabular-nums">
                            {applicationReview.length}
                        </Badge>
                    </TabsTrigger>
                    <TabsTrigger value="interview" className="px-6 py-2">
                        Personal Interview
                        <Badge className="ml-2 min-w-5 text-center rounded-full px-1 justify-center font-mono tabular-nums">
                            {interview.length}
                        </Badge>
                    </TabsTrigger>
                    <TabsTrigger value="doc-verification" className="px-6 py-2">
                        Document Verification
                        <Badge className="ml-2 min-w-5 text-center rounded-full px-1 justify-center font-mono tabular-nums">
                            {documentVerification.length}
                        </Badge>
                    </TabsTrigger>
                    <TabsTrigger value="background-check" className="px-6 py-2">
                        Background Check
                        <Badge className="ml-2 min-w-5 text-center rounded-full px-1 justify-center font-mono tabular-nums">
                            {backgroundCheck.length}
                        </Badge>
                    </TabsTrigger>
                    <TabsTrigger value="hired" className="px-6 py-2">
                        Hired
                        <Badge className="ml-2 min-w-5 text-center rounded-full px-1 justify-center font-mono tabular-nums">
                            {hired.length}
                        </Badge>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="application-review">
                    {applicationReview.length === 0 ? (
                        <div className="mt-8 text-center text-gray-500">No candidates in this stage.</div>
                    ) : (
                        <Table className="mt-6  w-full">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Candidate Id</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {applicationReview.map((candidate) => (
                                    <TableRow
                                        className={candidate.status === "rejected" ? "bg-red-100 hover:bg-red-200" : ""}
                                        key={candidate.userId}
                                    >
                                        <TableCell>{candidate.userId}</TableCell>
                                        <TableCell className="font-medium">{candidate.fullName}</TableCell>

                                        <TableCell className="flex">
                                            <Button
                                                variant="destructive"
                                                onClick={() => {
                                                    mutation.mutate({
                                                        applicationId: candidate.applicationId!,
                                                        stage: candidate.stage!,
                                                        status: "rejected",
                                                    });
                                                }}
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    mutation.mutate({
                                                        applicationId: candidate.applicationId!,
                                                        stage: "interview",
                                                        status: candidate.status!,
                                                    });
                                                }}
                                                disabled={candidate.status === "rejected"}
                                                className="ml-3 bg-emerald-500 hover:bg-emerald-400"
                                            >
                                                Next Stage
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </TabsContent>

                <TabsContent value="interview">
                    {interview.length === 0 ? (
                        <div className="mt-8 text-center text-gray-500">No candidates in this stage.</div>
                    ) : (
                        <Table className="mt-6">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Candidate Id</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {interview.map((candidate) => (
                                    <TableRow
                                        className={candidate.status === "rejected" ? "bg-red-100 hover:bg-red-200" : ""}
                                        key={candidate.userId}
                                    >
                                        <TableCell>{candidate.userId}</TableCell>
                                        <TableCell className="font-medium">{candidate.fullName}</TableCell>

                                        <TableCell className="flex">
                                            <Button
                                                variant="destructive"
                                                onClick={() => {
                                                    mutation.mutate({
                                                        applicationId: candidate.applicationId!,
                                                        stage: candidate.stage!,
                                                        status: "rejected",
                                                    });
                                                }}
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    mutation.mutate({
                                                        applicationId: candidate.applicationId!,
                                                        stage: "doc-verification",
                                                        status: candidate.status!,
                                                    });
                                                }}
                                                disabled={candidate.status === "rejected"}
                                                className="ml-3 bg-emerald-500 hover:bg-emerald-400"
                                            >
                                                Next Stage
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </TabsContent>

                <TabsContent value="doc-verification">
                    {documentVerification.length === 0 ? (
                        <div className="mt-8 text-center text-gray-500">No candidates in this stage.</div>
                    ) : (
                        <Table className="mt-6">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Candidate Id</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {documentVerification.map((candidate) => (
                                    <TableRow
                                        className={candidate.status === "rejected" ? "bg-red-100 hover:bg-red-200" : ""}
                                        key={candidate.userId}
                                    >
                                        <TableCell>{candidate.userId}</TableCell>
                                        <TableCell className="font-medium">{candidate.fullName}</TableCell>

                                        <TableCell className="flex">
                                            <Button
                                                variant="destructive"
                                                onClick={() => {
                                                    mutation.mutate({
                                                        applicationId: candidate.applicationId!,
                                                        stage: candidate.stage!,
                                                        status: "rejected",
                                                    });
                                                }}
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    mutation.mutate({
                                                        applicationId: candidate.applicationId!,
                                                        stage: "background-check",
                                                        status: candidate.status!,
                                                    });
                                                }}
                                                disabled={candidate.status === "rejected"}
                                                className="ml-3 bg-emerald-500 hover:bg-emerald-400"
                                            >
                                                Next Stage
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </TabsContent>

                <TabsContent value="background-check">
                    {backgroundCheck.length === 0 ? (
                        <div className="mt-8 text-center text-gray-500">No candidates in this stage.</div>
                    ) : (
                        <Table className="mt-6">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Candidate Id</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {backgroundCheck.map((candidate) => (
                                    <TableRow
                                        className={candidate.status === "rejected" ? "bg-red-100 hover:bg-red-200" : ""}
                                        key={candidate.userId}
                                    >
                                        <TableCell>{candidate.userId}</TableCell>
                                        <TableCell className="font-medium">{candidate.fullName}</TableCell>

                                        <TableCell className="flex">
                                            <Button
                                                variant="destructive"
                                                onClick={() => {
                                                    mutation.mutate({
                                                        applicationId: candidate.applicationId!,
                                                        stage: candidate.stage!,
                                                        status: "rejected",
                                                    });
                                                }}
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    mutation.mutate({
                                                        applicationId: candidate.applicationId!,
                                                        stage: "hired",
                                                        status: candidate.status!,
                                                    });
                                                }}
                                                disabled={candidate.status === "rejected"}
                                                className="ml-3 bg-emerald-500 hover:bg-emerald-400"
                                            >
                                                Next Stage
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </TabsContent>

                <TabsContent value="hired">
                    {hired.length === 0 ? (
                        <div className="mt-8 text-center text-gray-500">No candidates in this stage.</div>
                    ) : (
                        <Table className="mt-6">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Candidate Id</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {hired.map((candidate) => (
                                    <TableRow key={candidate.userId}>
                                        <TableCell className="text-emerald-700 font-bold text-lg">
                                            {candidate.userId}
                                        </TableCell>
                                        <TableCell className="text-emerald-700 font-bold text-lg">
                                            {candidate.fullName}
                                        </TableCell>

                                        <TableCell className="flex">
                                            <div className="text-emerald-700 font-bold text-lg">Hired</div>
                                            <Button className="ml-3 bg-emerald-500 hover:bg-emerald-400 invisible">
                                                Next Stage
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default JobDetailsAdmin;
