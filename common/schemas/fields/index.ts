export const tableSchemas = {
  bucket: {
    buckets: {
      name: 'buckets',
      fields: {
        id: 'id',
        title: 'title',
        description: 'description',
        category: 'category',
        thumbnail: 'thumbnail',
        owner: 'owner',
        closing: 'closing',
        priority: 'priority',
        targetDate: 'target_date',
        archive: 'archive',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    },
    tasks: {
      name: 'tasks',
      fields: {
        id: 'id',
        bucketId: 'backet_id',
        content: 'content',
        progress: 'progress',
        archive: 'archive',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    },
    categories: {
      name: 'categories',
      fields: {
        id: 'id',
        userId: 'user_id',
        name: 'name',
        thumbnail: 'thumbnail',
        order: 'order',
        archive: 'archive',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
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
        createdAt: 'created_at',
        updatedAt: 'updated_at',
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
