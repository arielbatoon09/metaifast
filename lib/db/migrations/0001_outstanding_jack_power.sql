ALTER TABLE "users_table" ADD COLUMN "fullName" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "createdAt" timestamp;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "updatedAt" timestamp;--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "firstName";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "lastName";