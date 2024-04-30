import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

if (process.env.DATABASE_URL === undefined) {
  throw new Error('DATABASE_URL UNDEFINED!!');
}

const connectionString = process.env.DATABASE_URL;

const client = postgres(connectionString);

const db = drizzle(client, {
  schema: {},
});

export default db;
