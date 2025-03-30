CREATE TABLE "candidate_profiles" (
	"user_id" integer NOT NULL,
	"fullname" text NOT NULL,
	"phone" text NOT NULL,
	"education" jsonb NOT NULL,
	"experience" jsonb NOT NULL,
	"skills" jsonb NOT NULL,
	"status" text,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "candidate_profiles" ADD CONSTRAINT "candidate_profiles_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "phone";--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "education";--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "experience";--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "skills";--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "status";