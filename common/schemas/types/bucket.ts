import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { buckets } from '~api/db/table/bucket/bucket';
import { categories } from '~api/db/table/bucket/category';
import { tasks } from '~api/db/table/bucket/task';

export type Bucket = InferSelectModel<typeof buckets>;

export type Buckets = Bucket[];

export type BucketInsert = InferInsertModel<typeof buckets>;

export type Category = InferSelectModel<typeof categories>;

export type Categories = Category[];

export type CategoryInsert = InferInsertModel<typeof categories>;

export type Task = InferSelectModel<typeof tasks>;

export type Tasks = Task[];

export type TaskInsert = InferInsertModel<typeof tasks>;
