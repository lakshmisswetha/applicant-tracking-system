export interface Job {
    jobId?: number;
    userId?: number;
    jobTitle?: string;
    department?: string;
    location?: string;
    openings?: number;
    experience?: string;
    employeeType?: string;
    workType?: string;
    qualificationRequired?: string;
    salary?: string;
    jobDescription?: string;
    skillsRequired?: string;
    applicationCount?: number;
    interviewCount?: number;
    documentVerificationCount?: number;
    backgroundCheckCount?: number;
    companyName?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface FetchJobsResponse {
    status: boolean;
    message: string;
    data: Job[];
}
