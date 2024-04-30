import { relations } from 'drizzle-orm';
import {
  boolean,
  index,
  numeric,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { tableSchemas } from '~com/schemas/fields';
import { pgTable } from '../_table';
import { users } from '../auth/user';
import { buckets } from './bucket';

const table = tableSchemas.bucket.categories;

export const categories = pgTable(
  table.name,
  {
    id: uuid(table.fields.id).defaultRandom().notNull().primaryKey(),
    userId: uuid(table.fields.userId).notNull(),
    name: varchar(table.fields.name, { length: 128 }).notNull(),
    thumbnail: varchar(table.fields.thumbnail, { length: 255 }),
    order: numeric(table.fields.order).default('0').notNull(),
    archive: boolean(table.fields.archive).default(false).notNull(),
    createdAt: timestamp(table.fields.createdAt, { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp(table.fields.updatedAt, { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (categories) => ({
    categoryIdIdx: index('category_id_idx').on(categories.id),
  }),
);

export const categoryRelations = relations(categories, ({ one }) => ({
  users: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
  categories: one(buckets, {
    fields: [categories.id],
    references: [buckets.category],
  }),
}));
