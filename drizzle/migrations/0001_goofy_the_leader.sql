DO $$ BEGIN
 CREATE TYPE "provider" AS ENUM('email', 'google', 'github', 'discord', 'line', 'facebook');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('guest', 'client', 'demo', 'developer', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "sex" AS ENUM('man', 'woman', 'not-set');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
