CREATE TABLE IF NOT EXISTS "bucketful_buckets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"category" uuid,
	"thumbnail" varchar(255),
	"owner" uuid NOT NULL,
	"closing" date NOT NULL,
	"priority" smallint DEFAULT 5 NOT NULL,
	"archive" boolean DEFAULT false NOT NULL,
	"target_date" date,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "bucketful_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"name" varchar(128) NOT NULL,
	"thumbnail" varchar(255),
	"order" numeric DEFAULT '0' NOT NULL,
	"archive" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "bucketful_tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"backet_id" uuid NOT NULL,
	"content" varchar(255) NOT NULL,
	"progress" numeric DEFAULT '0',
	"archive" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "bucketful_users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"provider" "provider" DEFAULT 'email' NOT NULL,
	"avator" varchar(255) DEFAULT '/image/avator/default.png' NOT NULL,
	"birthday" date,
	"sex" "sex" DEFAULT 'not-set' NOT NULL,
	"role" "role" DEFAULT 'guest' NOT NULL,
	"leave" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "bucketful_users_email_unique" UNIQUE("email")
);

CREATE INDEX IF NOT EXISTS "bucket_id_idx" ON "bucketful_buckets" ("id");
CREATE INDEX IF NOT EXISTS "category_id_idx" ON "bucketful_categories" ("id");
CREATE INDEX IF NOT EXISTS "task_id_idx" ON "bucketful_tasks" ("id");
CREATE INDEX IF NOT EXISTS "user_id_idx" ON "bucketful_users" ("id");