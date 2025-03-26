CREATE TABLE "applications" (
	"application_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"job_id" integer NOT NULL,
	"name" text NOT NULL,
	"phone" text NOT NULL,
	"education" jsonb NOT NULL,
	"experience" jsonb NOT NULL,
	"skills" jsonb NOT NULL,
	"status" text DEFAULT 'applied',
	"applied_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "jobs" (
	"job_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"job_title" text NOT NULL,
	"department" text,
	"location" text,
	"openings" integer,
	"experience" text,
	"employee_type" text,
	"work_type" text,
	"qualification_required" text,
	"salary" text,
	"job_description" text,
	"skills_required" text,
	"application_count" integer,
	"interview_count" integer,
	"document_verification_count" integer,
	"background_check" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_job_id_jobs_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("job_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;