import { z } from 'zod';

import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { users } from '~api/db/table/auth/user';
import { zProviders } from '../fields/enum/provider';
import { zRoles } from '../fields/enum/role';
import { zSex } from '../fields/enum/sex';

export type Providers = z.infer<typeof zProviders>;

export type Roles = z.infer<typeof zRoles>;

export type Sex = z.infer<typeof zSex>;

export type User = InferSelectModel<typeof users>;

export type Users = User[];

export type UserInsert = InferInsertModel<typeof users>;
