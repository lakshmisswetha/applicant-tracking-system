export interface IJob {
    job_id?: number;
    user_id: number;
    job_title: string;
    department?: string;
    location?: string;
    openings?: number;
    experience?: number;
    employee_type?: string;
    work_type?: string;
    qualification_required?: string;
    salary?: string;
    job_description?: string;
    skills_required?: string;
    created_at?: Date;
    updated_at?: Date;
}
