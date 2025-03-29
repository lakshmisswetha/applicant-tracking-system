import db from "./config/db";
import app from "./app";
import pool from "./config/db";

const PORT = process.env.PORT || 5000;

db.$client
    .query("SELECT 1")
    .then(() => {
        console.log("✅ DB Connected!");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("❌ Database connection error: ", err);
        process.exit(1);
    });
