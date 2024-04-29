export const tableSchemas = {
  bucket: {
    buckets: {
      name: 'buckets',
      fields: {
        id: 'bucket_id',
        title: 'bucket_title',
        description: 'bucket_description',
        category: 'bucket_category',
        thumbnail: 'bucket_thumbnail',
        owner: 'bucket_owner',
        closing: 'bucket_closing',
        priority: 'bucket_priority',
        targetDate: 'bucket_target_date',
        archive: 'bucket_archive',
        createdAt: 'bucket_created_at',
        updatedAt: 'bucket_updated_at',
      },
    },
    tasks: {
      name: 'tasks',
      fields: {
        id: 'task_id',
        bucketId: 'task_backet_id',
        content: 'task_content',
        progress: 'task_progress',
        archive: 'task_archive',
        createdAt: 'task_created_at',
        updatedAt: 'task_updated_at',
      },
    },
    categories: {
      name: 'categories',
      fields: {
        id: 'category_id',
        userId: 'category_user_id',
        name: 'category_name',
        thumbnail: 'category_thumbnail',
        order: 'category_order',
        archive: 'category_archive',
        createdAt: 'category_created_at',
        updatedAt: 'category_updated_at',
      },
    },
  },
  auth: {
    users: {
      name: 'users',
      fields: {
        id: 'id',
        name: 'name',
        email: 'email',
        password: 'password',
        provider: 'provider',
        avator: 'avator',
        birthday: 'birthday',
        sex: 'sex',
        role: 'role',
        leave: 'leave',
      },
    },
    userDetails: {
      name: 'user_details',
      fields: {},
    },
    followers: {
      name: 'followers',
      fields: {},
    },
  },
  payment: {},
};
