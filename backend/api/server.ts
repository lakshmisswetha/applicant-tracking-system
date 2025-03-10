import app from "./app";
import pool from "./config/db";

const PORT = process.env.PORT;

pool.on("connect", () => {
    console.log("✅ DB Connected!");
});
pool.on("error", (err) => {
    console.error("❌ Database connection error:", err);
    process.exit(1);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
