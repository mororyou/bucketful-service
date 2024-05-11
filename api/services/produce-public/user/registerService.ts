import { and, eq } from 'drizzle-orm';
import db from '~api/db';
import { users } from '~api/db/table/schema';
import { AuthUser, Providers, Roles } from '~com/schemas/types/user';

export default async function registerUserService({
  name,
  email,
  password,
  avator = '',
  provider,
  role = 'guest',
}: {
  name: string;
  email: string;
  password: string;
  avator: string;
  provider: Providers;
  role: Roles;
}): Promise<AuthUser> {
  const account = {
    accountId: '',
    count: 0,
  } as {
    accountId: string;
    count: number;
  };

  do {
    account.accountId = Math.random().toString(36).slice(-8);

    const result = await db
      .select()
      .from(users)
      .where(and(eq(users.accountId, account.accountId)))
      .limit(1);

    account.count = result.length;
  } while (account.count > 0);

  const user = await db
    .insert(users)
    .values({
      accountId: account.accountId,
      name,
      email,
      password,
      avator,
      provider,
      role,
    })
    .returning()
    .execute();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = user[0];
  return userWithoutPassword;
}
