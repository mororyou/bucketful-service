import type { Config } from 'drizzle-kit';

if (process.env.DATABASE_URL === undefined) {
  throw new Error('DATABASE_URL UNDEFINED!!');
}

export default {
  out: './drizzle/migrations',
  schema: './api/db/table/schema.ts',
  breakpoints: false,
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;
