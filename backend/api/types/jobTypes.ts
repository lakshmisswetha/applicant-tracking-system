export interface IJob {
    jobId?: number;
    userId: number;
    jobTitle: string;
    department?: string;
    location?: string;
    openings?: number;
    experience?: number;
    employee_type?: string;
    workType?: string;
    qualificationRequired?: string;
    salary?: string;
    jobDescription?: string;
    skillsRequired?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
