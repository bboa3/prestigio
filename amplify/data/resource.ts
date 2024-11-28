import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { postConfirmation } from '../auth/post-confirmation/resource';
import { addOrUpdateSearchableRecord } from '../functions/add-or-update-searchable-record/resource';
import { addUserToGroup } from '../functions/add-user-to-group/resource';
import { adminCreateUser } from '../functions/admin-create-user/resource';
import { deleteSearchableRecord } from '../functions/delete-searchable-record/resource';

const userRoles = ['ADMIN', 'EDITOR', 'AUTHOR', 'SUBSCRIBER'] as const;
const articleStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'] as const;
const mediaTypes = ['IMAGE', 'VIDEO'] as const;

const schema = a.schema({
  genericAPIResponse: a.customType({
    content: a.string()
  }),
  addUserToGroup: a
    .mutation()
    .arguments({
      userId: a.string().required(),
      groupName: a.string().required(),
    })
    .returns(a.ref('genericAPIResponse'))
    .handler(a.handler.function(addUserToGroup))
    .authorization((allow) => [allow.group('ADMIN')]),
  adminCreateUser: a
    .mutation()
    .arguments({
      email: a.string().required(),
      password: a.string().required(),
    })
    .authorization((allow) => [allow.group('ADMIN')])
    .handler(a.handler.function(adminCreateUser))
    .returns(a.ref('genericAPIResponse')),
  addOrUpdateSearchableRecord: a
    .mutation()
    .arguments({
      indexName: a.string().required(),
      objectID: a.string().required(),
      body: a.json().required(),
    })
    .handler(a.handler.function(addOrUpdateSearchableRecord))
    .authorization((allow) => [allow.guest()])
    .returns(a.ref('genericAPIResponse')),
  deleteSearchableRecord: a
    .mutation()
    .arguments({
      indexName: a.string().required(),
      objectID: a.string().required(),
    })
    .handler(a.handler.function(deleteSearchableRecord))
    .authorization((allow) => [allow.guest()])
    .returns(a.ref('genericAPIResponse')),

  user: a.model({
    id: a.id().required(),
    authId: a.string().required(),
    email: a.string().required(),
    name: a.string(),
    phone: a.string(),
    role: a.enum(userRoles),
    profilePicture: a.string(),
    bio: a.string(),
    isDeleted: a.boolean().required().default(false),
    articles: a.hasMany('article', 'authorId'),
    comments: a.hasMany('comment', 'authorId'),
    likes: a.hasMany('like', 'userId'),
    views: a.hasMany('view', 'userId'),
    notifications: a.hasMany('notification', 'userId'),
  }).authorization(allow => [
    allow.ownerDefinedIn('authId').to(['read', 'update']),
    allow.groups(['EDITOR', 'ADMIN']).to(['create', 'read', 'update']),
  ]),

  article: a.model({
    id: a.id().required(),
    title: a.string().required(),
    slug: a.string().required(),
    excerpt: a.string(),
    authorId: a.id().required(),
    status: a.enum(articleStatuses),
    tags: a.string().required().array().required(),
    publishedAt: a.datetime(),
    isDeleted: a.boolean().default(false),
    featuredImage: a.hasOne('media', 'articleId'),
    comments: a.hasMany('comment', 'articleId'),
    likes: a.hasMany('like', 'articleId'),
    views: a.hasMany('view', 'articleId'),
    author: a.belongsTo('user', 'authorId'),
    contentBlocks: a.hasMany('contentBlock', 'articleId'),
    categories: a.hasMany('articleCategory', 'articleId'),
  }).authorization(allow => [
    allow.guest().to(['read']),
    allow.groups(['ADMIN', 'EDITOR']).to(['create', 'read', 'update', 'delete']),
  ]),

  contentBlock: a.model({
    id: a.id().required(),
    articleId: a.id().required(),
    title: a.string(),
    content: a.string().required(),
    order: a.integer().required(),
    article: a.belongsTo('article', 'articleId'),
    medias: a.hasMany('media', 'contentBlockId'),
  }).authorization(allow => [
    allow.guest().to(['read']),
    allow.groups(['ADMIN', 'EDITOR']).to(['create', 'read', 'update', 'delete']),
  ]),

  media: a.model({
    id: a.id().required(),
    url: a.string().required(),
    type: a.enum(mediaTypes),
    articleId: a.id(),
    contentBlockId: a.id(),
    article: a.belongsTo('article', 'articleId'),
    contentBlock: a.belongsTo('contentBlock', 'contentBlockId'),
  }).authorization(allow => [
    allow.guest().to(['read']),
    allow.groups(['ADMIN', 'EDITOR']).to(['create', 'read', 'update', 'delete']),
  ]),

  like: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    articleId: a.id().required(),
    user: a.belongsTo('user', 'userId'),
    article: a.belongsTo('article', 'articleId'),
  })
    .identifier(['articleId'])
    .authorization(allow => [
      allow.guest().to(['read']),
      allow.groups(['ADMIN']).to(['read', 'delete']),
    ])
    .disableOperations(['update']),

  view: a.model({
    id: a.id().required(),
    userId: a.id(),
    identityId: a.string(),
    user: a.belongsTo('user', 'userId'),
    articleId: a.id().required(),
    article: a.belongsTo('article', 'articleId'),
  })
    .authorization(allow => [
      allow.guest().to(['read']),
      allow.groups(['ADMIN']).to(['read']),
    ])
    .disableOperations(['update', 'delete']),
  category: a.model({
    id: a.id().required(),
    name: a.string().required(),
    slug: a.string().required(),
    description: a.string(),
    isDeleted: a.boolean().default(false),
    articles: a.hasMany('articleCategory', 'categoryId'),
  }).authorization(allow => [
    allow.guest().to(['read']),
    allow.groups(['ADMIN', 'EDITOR']).to(['create', 'read', 'update', 'delete']),
  ]),

  articleCategory: a.model({
    id: a.id().required(),
    articleId: a.id().required(),
    categoryId: a.id().required(),
    article: a.belongsTo('article', 'articleId'),
    category: a.belongsTo('category', 'categoryId'),
  }).identifier(['articleId', 'categoryId']).authorization(allow => [
    allow.guest().to(['read']),
    allow.groups(['ADMIN', 'EDITOR']).to(['create', 'read', 'delete']),
  ]).disableOperations(['update']),

  comment: a.model({
    id: a.id().required(),
    content: a.string().required(),
    authorId: a.id().required(),
    author: a.belongsTo('user', 'authorId'),
    articleId: a.id().required(),
    article: a.belongsTo('article', 'articleId'),
    parentCommentId: a.id(),
    parentComment: a.belongsTo('comment', 'parentCommentId'),
    replies: a.hasMany('comment', 'parentCommentId'),
  }).authorization(allow => [
    allow.guest().to(['read']),
    allow.owner().to(['create', 'read', 'update', 'delete']),
    allow.groups(['ADMIN', 'EDITOR']).to(['create', 'read', 'update', 'delete']),
  ]),

  notification: a.model({
    id: a.id().required(),
    content: a.string().required(),
    userId: a.id().required(),
    isRead: a.boolean().required().default(false),
    user: a.belongsTo('user', 'userId'),
  }).authorization(allow => [
    allow.groups(['ADMIN']).to(['create', 'read', 'update', 'delete']),
  ]),
})
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
