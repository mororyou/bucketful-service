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
  const user = await db
    .insert(users)
    .values({
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
