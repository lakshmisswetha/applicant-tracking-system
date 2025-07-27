import React from "react";
import JobDetailsAdmin from "./JobDetailsAdmin";
import JobDetailsCandidate from "./JobDetailsCandidate";
import { useUserRole } from "@/hooks/useUserRole";

const JobDetailsWrapper: React.FC = () => {
    const role = useUserRole();
    return role === "admin" ? <JobDetailsAdmin /> : <JobDetailsCandidate />;
};

export default JobDetailsWrapper;
