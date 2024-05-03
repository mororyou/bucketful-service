import { and, eq } from 'drizzle-orm';
import db from '~api/db';
import { users } from '~api/db/table/schema';
import { User } from '~com/schemas/types/user';

export default async function getUserDataService({
  email,
}: {
  email: string;
}): Promise<User | undefined> {
  const result = await db
    .select()
    .from(users)
    .where(and(eq(users.email, email)))
    .limit(1);

  if (result.length === 0) return undefined;

  return result[0];
}
