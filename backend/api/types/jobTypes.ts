export interface IJob {
    jobId?: number;
    userId: number;
    jobTitle: string;
    department?: string | null;
    location?: string | null;
    openings?: number | null;
    experience?: string | null;
    employee_type?: string | null;
    workType?: string | null;
    qualificationRequired?: string | null;
    salary?: string | null;
    jobDescription?: string | null;
    skillsRequired?: string | null;
    applicationCount?: number | null;
    interviewCount?: number | null;
    documentVerificationCount?: number | null;
    backgroundCheckCount?: number | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
}
