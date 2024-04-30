import { boolean, index, timestamp, uuid } from 'drizzle-orm/pg-core';
import { tableSchemas } from '~com/schemas/fields';
import { pgTable } from '../_table';

import { relations } from 'drizzle-orm';
import { date, pgEnum, varchar } from 'drizzle-orm/pg-core';
import { providers } from '~com/schemas/fields/enum/provider';
import { roles } from '~com/schemas/fields/enum/role';
import { sex } from '~com/schemas/fields/enum/sex';
import { buckets } from '../bucket/bucket';
import { categories } from '../bucket/category';

const table = tableSchemas.auth.users;

const sexEnum = pgEnum(table.fields.sex, sex);

const roleEnum = pgEnum(table.fields.role, roles);

const providerEnum = pgEnum(table.fields.provider, providers);

export const users = pgTable(
  table.name,
  {
    id: uuid(table.fields.id).defaultRandom().notNull().primaryKey(),
    name: varchar(table.fields.name, { length: 50 }).notNull(),
    email: varchar(table.fields.email, { length: 255 }).notNull().unique(),
    password: varchar(table.fields.password, { length: 255 }).notNull(),
    provider: providerEnum(table.fields.provider).default('email').notNull(),
    avator: varchar(table.fields.avator, { length: 255 })
      .default('/image/avator/default.png')
      .notNull(),
    birthday: date(table.fields.birthday),
    sex: sexEnum(table.fields.sex).default('not-set').notNull(),
    role: roleEnum(table.fields.role).default('guest').notNull(),
    leave: boolean(table.fields.leave).default(false).notNull(),
    createdAt: timestamp(table.fields.createdAt, { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp(table.fields.updatedAt, { withTimezone: true })
      .defaultNow()
      .notNull(),
  },

  (user) => ({
    userIdx: index('user_id_idx').on(user.id),
  }),
);

export const usersRelations = relations(users, ({ many }) => ({
  buckets: many(buckets),
  categories: many(categories),
}));
