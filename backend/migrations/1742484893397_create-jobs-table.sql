-- Up Migration

CREATE TABLE jobs (
    job_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    job_title VARCHAR(50) NOT NULL,
    department VARCHAR(50),
    location VARCHAR(255),
    openings INT CHECK(openings>=0),
    experience INT CHECK(experience>=0),
    employee_type VARCHAR(50),
    work_type VARCHAR(50),
    qualification_required TEXT,
    salary VARCHAR(100),
    job_description TEXT,
    skills_required TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
)

-- Down Migration