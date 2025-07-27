export interface IJob {
    jobId?: number;
    userId: number;
    jobTitle: string;
    department?: string | null;
    location?: string | null;
    openings?: number | null;
    experience?: string | null;
    employeeType?: string | null;
    workType?: string | null;
    qualificationRequired?: string | null;
    salary?: string | null;
    jobDescription?: string | null;
    skillsRequired?: string | null;
    status: string | null;
    companyName?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
}

export interface IExperience {
    company?: string;
    designation?: string;
    location?: string;
    fromYear?: string;
    toYear?: string;
    jobDescription?: string;
}

export interface IEducation {
    institute?: string;
    course?: string;
    location?: string;
    passedYear?: string;
    passedMonth?: string;
}

export interface IApplication {
    applicationId?: number;
    userId: number;
    jobId: number;
    fullName: string;
    phone: string;
    location?: string;
    dob?: string;
    nationality?: string;
    skills?: string;
    languages?: string;
    education?: IEducation[];
    experience?: IExperience[];
    updatedAt?: Date | null;
}
