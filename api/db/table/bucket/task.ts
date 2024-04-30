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
import { buckets } from './bucket';

const table = tableSchemas.bucket.tasks;

export const tasks = pgTable(
  table.name,
  {
    id: uuid(table.fields.id).defaultRandom().notNull().primaryKey(),
    bucketId: uuid(table.fields.bucketId).notNull(),
    content: varchar(table.fields.content, { length: 255 }).notNull(),
    progress: numeric(table.fields.progress).default('0'),
    archive: boolean(table.fields.archive).default(false).notNull(),
    createdAt: timestamp(table.fields.createdAt, { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp(table.fields.updatedAt, { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (tasks) => ({ taskIdIdx: index('task_id_idx').on(tasks.id) }),
);

export const taskRelations = relations(tasks, ({ one }) => ({
  bucket: one(buckets, { fields: [tasks.bucketId], references: [buckets.id] }),
}));
