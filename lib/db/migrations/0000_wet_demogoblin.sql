CREATE TABLE "users_table" (
	"id" text PRIMARY KEY NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"email" text NOT NULL,
	"plan" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
