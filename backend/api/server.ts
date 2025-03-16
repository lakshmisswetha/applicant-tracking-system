import app from "./app";
import pool from "./config/db";

const PORT = process.env.PORT || 5000;

pool.connect()
    .then(() => {
        console.log("✅ DB Connected!");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("❌ Database connection error: ", err);
        process.exit(1);
    });
