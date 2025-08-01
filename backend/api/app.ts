import express from "express";
import cors from "cors";
import appRoutes from "./routes/routes";

const app = express();
app.use(express.json());
app.use(cors());
// app.use(
//     cors({
//         origin: "https://applicant-tracking-system.pages.dev",
//         credentials: true,
//     })
// );
app.use("/api", appRoutes);

export default app;
