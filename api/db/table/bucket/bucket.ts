import { relations } from 'drizzle-orm';
import {
  boolean,
  date,
  index,
  smallint,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { tableSchemas } from '~com/schemas/fields';
import { pgTable } from '../_table';
import { users } from '../auth/user';
import { categories } from './category';
import { tasks } from './task';

const table = tableSchemas.bucket.buckets;

export const buckets = pgTable(
  table.name,
  {
    id: uuid(table.fields.id).defaultRandom().notNull().primaryKey(),
    title: varchar(table.fields.title, { length: 255 }).notNull(),
    description: text(table.fields.description),
    category: uuid(table.fields.category),
    thumbnail: varchar(table.fields.thumbnail, { length: 255 }),
    owner: uuid(table.fields.owner).notNull(),
    closing: date(table.fields.closing).notNull(),
    priority: smallint(table.fields.priority).default(5).notNull(),
    archive: boolean(table.fields.archive).default(false).notNull(),
    targetDate: date(table.fields.targetDate),
    createdAt: timestamp(table.fields.createdAt, { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp(table.fields.updatedAt, { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (buckets) => ({
    bucketIdx: index('bucket_id_idx').on(buckets.id),
  }),
);

export const bucketRelations = relations(buckets, ({ one, many }) => ({
  user: one(users, {
    fields: [buckets.owner],
    references: [users.id],
  }),
  tasks: many(tasks),
  category: one(categories, {
    fields: [buckets.category],
    references: [categories.id],
  }),
}));
