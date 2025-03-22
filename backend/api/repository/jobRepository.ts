import db from "../config/db";

export const createJob = async (jobDetails: any): Promise<number> => {
    try {
        const query = `
            INSERT INTO jobs (
                user_id, job_title, department, location, openings, experience,
                employee_type, work_type, qualification_required, salary,
                job_description, skills_required
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
             RETURNING job_id;

        `;

        const values = [
            jobDetails.user_id,
            jobDetails.job_title,
            jobDetails.department,
            jobDetails.location,
            jobDetails.openings,
            jobDetails.experience,
            jobDetails.employee_type,
            jobDetails.work_type,
            jobDetails.qualification_required,
            jobDetails.salary,
            jobDetails.job_description,
            jobDetails.skills_required,
        ];
        const { rows } = await db.query(query, values);
        return rows[0].job_id;
    } catch (err) {
        console.error("Error creating job: ", err);
        throw new Error("Database error: Unable to create job");
    }
};
