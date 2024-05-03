import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { buckets, categories, tasks, users } from './table/schema';

if (process.env.DATABASE_URL === undefined) {
  throw new Error('DATABASE_URL UNDEFINED!!');
}

const connectionString = process.env.DATABASE_URL;

const client = postgres(connectionString);

const db = drizzle(client, {
  schema: {
    users,
    buckets,
    categories,
    tasks,
  },
});

export default db;
