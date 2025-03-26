import { object } from "zod";
import db from "../config/db";
import { IJob } from "../types";

// export const createJob = async (jobDetails: IJob): Promise<number> => {
//     try {
//         const query = `
//             INSERT INTO jobs (
//                 user_id, job_title, department, location, openings, experience,
//                 employee_type, work_type, qualification_required, salary,
//                 job_description, skills_required
//             ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
//              RETURNING job_id;

//         `;

//         const values = [
//             jobDetails.userId,
//             jobDetails.job_title,
//             jobDetails.department,
//             jobDetails.location,
//             jobDetails.openings,
//             jobDetails.experience,
//             jobDetails.employee_type,
//             jobDetails.work_type,
//             jobDetails.qualification_required,
//             jobDetails.salary,
//             jobDetails.job_description,
//             jobDetails.skills_required,
//         ];
//         const { rows } = await db.query(query, values);
//         return rows[0].job_id;
//     } catch (err) {
//         console.error("Error creating job: ", err);
//         throw new Error("Database error: Unable to create job");
//     }
// };

// export const getJobById = async (jobId: number): Promise<IJob | null> => {
//     try {
//         const query = `
//             SELECT * FROM jobs WHERE job_id = $1
//         `;
//         const result = await db.query(query, [jobId]);
//         if (result.rows.length === 0) {
//             console.warn(`Job not found with id: ${jobId}`);
//             return null;
//         }
//         return result.rows[0];
//     } catch (err) {
//         console.error("Error fetching job: ", err);
//         throw new Error("Database error: Unable to fetch job");
//     }
// };

// export const updateJob = async (jobId: number, updatedDetails: Partial<IJob>): Promise<number | null> => {
//     try {
//         const fields = Object.entries(updatedDetails)
//             .map(([key], index) => `${key} = $${index + 1}`)
//             .join(",");

//         const query = `
//         UPDATE jobs SET ${fields}, updated_at = NOW()
//         WHERE job_id = $${Object.keys(updatedDetails).length + 1}
//         RETURNING job_id
//         `;

//         const result = await db.query(query, [...Object.values(updatedDetails), jobId]);
//         return result.rows[0].job_id;
//     } catch (err) {
//         console.error("Error updating job: ", err);
//         throw new Error("Database error: Unable to update job");
//     }
// };
