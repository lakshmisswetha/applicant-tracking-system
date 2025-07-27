import { z } from "zod";

export const updateStageValidation = z.object({
    applicationId: z.number(),
    stage: z.enum(["application-review", "interview", "doc-verification", "background-check", "hired", "rejected"]),
    status: z.enum(["pending", "rejected"]),
});
