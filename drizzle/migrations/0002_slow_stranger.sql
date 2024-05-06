ALTER TABLE "bucketful_users" ADD COLUMN "account_id" varchar(255) NOT NULL;
CREATE INDEX IF NOT EXISTS "account_id_idx" ON "bucketful_users" ("account_id");
ALTER TABLE "bucketful_users" ADD CONSTRAINT "bucketful_users_account_id_unique" UNIQUE("account_id");