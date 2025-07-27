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
    userId?: number;
    jobId: number;
    fullName: string;
    phone: string;
    location?: string;
    dob?: Date;
    nationality?: string;
    languages?: string;
    skills?: string;
    stage?: string;
    status?: string;
    education?: IEducation[];
    experience?: IExperience[];
    updatedAt?: Date | null;
}

export interface ApplicationFormSectionProps {
    formData: IApplication;
    setFormData: React.Dispatch<React.SetStateAction<IApplication>>;
}
