/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type article = {
  __typename: "article",
  author?: user | null,
  authorId: string,
  categories?: ModelarticleCategoryConnection | null,
  comments?: ModelcommentConnection | null,
  contentBlocks?: ModelcontentBlockConnection | null,
  createdAt: string,
  excerpt?: string | null,
  featuredImage?: media | null,
  id: string,
  likes?: ModellikeConnection | null,
  publishedAt?: string | null,
  slug: string,
  status?: ArticleStatus | null,
  tags: Array< string >,
  title: string,
  updatedAt: string,
  views?: ModelviewConnection | null,
};

export type user = {
  __typename: "user",
  articles?: ModelarticleConnection | null,
  authId: string,
  bio?: string | null,
  comments?: ModelcommentConnection | null,
  createdAt: string,
  email: string,
  id: string,
  likes?: ModellikeConnection | null,
  name: string,
  notifications?: ModelnotificationConnection | null,
  owner?: string | null,
  profilePicture?: string | null,
  role?: UserRole | null,
  updatedAt: string,
  views?: ModelviewConnection | null,
};

export type ModelarticleConnection = {
  __typename: "ModelarticleConnection",
  items:  Array<article | null >,
  nextToken?: string | null,
};

export type ModelcommentConnection = {
  __typename: "ModelcommentConnection",
  items:  Array<comment | null >,
  nextToken?: string | null,
};

export type comment = {
  __typename: "comment",
  article?: article | null,
  articleId: string,
  author?: user | null,
  authorId: string,
  content: string,
  createdAt: string,
  id: string,
  owner?: string | null,
  parentComment?: comment | null,
  parentCommentId?: string | null,
  replies?: ModelcommentConnection | null,
  updatedAt: string,
};

export type ModellikeConnection = {
  __typename: "ModellikeConnection",
  items:  Array<like | null >,
  nextToken?: string | null,
};

export type like = {
  __typename: "like",
  article?: article | null,
  articleId: string,
  createdAt: string,
  id: string,
  updatedAt: string,
  user?: user | null,
  userId: string,
};

export type ModelnotificationConnection = {
  __typename: "ModelnotificationConnection",
  items:  Array<notification | null >,
  nextToken?: string | null,
};

export type notification = {
  __typename: "notification",
  content: string,
  createdAt: string,
  id: string,
  isRead: boolean,
  updatedAt: string,
  user?: user | null,
  userId: string,
};

export enum UserRole {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  EDITOR = "EDITOR",
  SUBSCRIBER = "SUBSCRIBER",
}


export type ModelviewConnection = {
  __typename: "ModelviewConnection",
  items:  Array<view | null >,
  nextToken?: string | null,
};

export type view = {
  __typename: "view",
  article?: article | null,
  articleId: string,
  createdAt: string,
  id: string,
  identityId: string,
  updatedAt: string,
  user?: user | null,
  userId?: string | null,
};

export type ModelarticleCategoryConnection = {
  __typename: "ModelarticleCategoryConnection",
  items:  Array<articleCategory | null >,
  nextToken?: string | null,
};

export type articleCategory = {
  __typename: "articleCategory",
  article?: article | null,
  articleId: string,
  category?: category | null,
  categoryId: string,
  createdAt: string,
  id: string,
  updatedAt: string,
};

export type category = {
  __typename: "category",
  articles?: ModelarticleCategoryConnection | null,
  createdAt: string,
  description?: string | null,
  id: string,
  name: string,
  slug: string,
  updatedAt: string,
};

export type ModelcontentBlockConnection = {
  __typename: "ModelcontentBlockConnection",
  items:  Array<contentBlock | null >,
  nextToken?: string | null,
};

export type contentBlock = {
  __typename: "contentBlock",
  article?: article | null,
  articleId: string,
  content: string,
  createdAt: string,
  id: string,
  media?: ModelmediaConnection | null,
  order: number,
  title?: string | null,
  updatedAt: string,
};

export type ModelmediaConnection = {
  __typename: "ModelmediaConnection",
  items:  Array<media | null >,
  nextToken?: string | null,
};

export type media = {
  __typename: "media",
  article?: article | null,
  articleId?: string | null,
  contentBlock?: contentBlock | null,
  contentBlockId?: string | null,
  createdAt: string,
  id: string,
  type?: MediaType | null,
  updatedAt: string,
  url: string,
};

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}


export enum ArticleStatus {
  ARCHIVED = "ARCHIVED",
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}


export type ModelIDKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type ModelArticleCategoryFilterInput = {
  and?: Array< ModelArticleCategoryFilterInput | null > | null,
  articleId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelArticleCategoryFilterInput | null,
  or?: Array< ModelArticleCategoryFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelArticleCategoryConnection = {
  __typename: "ModelArticleCategoryConnection",
  items:  Array<articleCategory | null >,
  nextToken?: string | null,
};

export type ModelArticleFilterInput = {
  and?: Array< ModelArticleFilterInput | null > | null,
  authorId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  excerpt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelArticleFilterInput | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  publishedAt?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  status?: ModelArticleStatusInput | null,
  tags?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelArticleStatusInput = {
  eq?: ArticleStatus | null,
  ne?: ArticleStatus | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<article | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  and?: Array< ModelCategoryFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelCategoryFilterInput | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  slug?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<category | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  and?: Array< ModelCommentFilterInput | null > | null,
  articleId?: ModelIDInput | null,
  authorId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCommentFilterInput | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  parentCommentId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<comment | null >,
  nextToken?: string | null,
};

export type ModelContentBlockFilterInput = {
  and?: Array< ModelContentBlockFilterInput | null > | null,
  articleId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelContentBlockFilterInput | null,
  or?: Array< ModelContentBlockFilterInput | null > | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelContentBlockConnection = {
  __typename: "ModelContentBlockConnection",
  items:  Array<contentBlock | null >,
  nextToken?: string | null,
};

export type ModelLikeFilterInput = {
  and?: Array< ModelLikeFilterInput | null > | null,
  articleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelLikeFilterInput | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<like | null >,
  nextToken?: string | null,
};

export type ModelMediaFilterInput = {
  and?: Array< ModelMediaFilterInput | null > | null,
  articleId?: ModelIDInput | null,
  contentBlockId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelMediaFilterInput | null,
  or?: Array< ModelMediaFilterInput | null > | null,
  type?: ModelMediaTypeInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type ModelMediaTypeInput = {
  eq?: MediaType | null,
  ne?: MediaType | null,
};

export type ModelMediaConnection = {
  __typename: "ModelMediaConnection",
  items:  Array<media | null >,
  nextToken?: string | null,
};

export type ModelNotificationFilterInput = {
  and?: Array< ModelNotificationFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isRead?: ModelBooleanInput | null,
  not?: ModelNotificationFilterInput | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<notification | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  authId?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserRoleInput = {
  eq?: UserRole | null,
  ne?: UserRole | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<user | null >,
  nextToken?: string | null,
};

export type ModelViewFilterInput = {
  and?: Array< ModelViewFilterInput | null > | null,
  articleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  identityId?: ModelStringInput | null,
  not?: ModelViewFilterInput | null,
  or?: Array< ModelViewFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelViewConnection = {
  __typename: "ModelViewConnection",
  items:  Array<view | null >,
  nextToken?: string | null,
};

export type genericAPIResponse = {
  __typename: "genericAPIResponse",
  content?: string | null,
};

export type ModelArticleConditionInput = {
  and?: Array< ModelArticleConditionInput | null > | null,
  authorId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  excerpt?: ModelStringInput | null,
  not?: ModelArticleConditionInput | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  publishedAt?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  status?: ModelArticleStatusInput | null,
  tags?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateArticleInput = {
  authorId: string,
  excerpt?: string | null,
  id?: string | null,
  publishedAt?: string | null,
  slug: string,
  status?: ArticleStatus | null,
  tags: Array< string >,
  title: string,
};

export type ModelArticleCategoryConditionInput = {
  and?: Array< ModelArticleCategoryConditionInput | null > | null,
  articleId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelArticleCategoryConditionInput | null,
  or?: Array< ModelArticleCategoryConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateArticleCategoryInput = {
  articleId: string,
  categoryId: string,
  id?: string | null,
};

export type ModelCategoryConditionInput = {
  and?: Array< ModelCategoryConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCategoryConditionInput | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  slug?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCategoryInput = {
  description?: string | null,
  id?: string | null,
  name: string,
  slug: string,
};

export type ModelCommentConditionInput = {
  and?: Array< ModelCommentConditionInput | null > | null,
  articleId?: ModelIDInput | null,
  authorId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelCommentConditionInput | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  owner?: ModelStringInput | null,
  parentCommentId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCommentInput = {
  articleId: string,
  authorId: string,
  content: string,
  id?: string | null,
  parentCommentId?: string | null,
};

export type ModelContentBlockConditionInput = {
  and?: Array< ModelContentBlockConditionInput | null > | null,
  articleId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelContentBlockConditionInput | null,
  or?: Array< ModelContentBlockConditionInput | null > | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateContentBlockInput = {
  articleId: string,
  content: string,
  id?: string | null,
  order: number,
  title?: string | null,
};

export type ModelLikeConditionInput = {
  and?: Array< ModelLikeConditionInput | null > | null,
  articleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelLikeConditionInput | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateLikeInput = {
  articleId: string,
  id?: string | null,
  userId: string,
};

export type ModelMediaConditionInput = {
  and?: Array< ModelMediaConditionInput | null > | null,
  articleId?: ModelIDInput | null,
  contentBlockId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelMediaConditionInput | null,
  or?: Array< ModelMediaConditionInput | null > | null,
  type?: ModelMediaTypeInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type CreateMediaInput = {
  articleId?: string | null,
  contentBlockId?: string | null,
  id?: string | null,
  type?: MediaType | null,
  url: string,
};

export type ModelNotificationConditionInput = {
  and?: Array< ModelNotificationConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isRead?: ModelBooleanInput | null,
  not?: ModelNotificationConditionInput | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateNotificationInput = {
  content: string,
  id?: string | null,
  isRead: boolean,
  userId: string,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  authId?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  owner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserInput = {
  authId: string,
  bio?: string | null,
  email: string,
  id?: string | null,
  name: string,
  profilePicture?: string | null,
  role?: UserRole | null,
};

export type ModelViewConditionInput = {
  and?: Array< ModelViewConditionInput | null > | null,
  articleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  identityId?: ModelStringInput | null,
  not?: ModelViewConditionInput | null,
  or?: Array< ModelViewConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateViewInput = {
  articleId: string,
  id?: string | null,
  identityId: string,
  userId?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type DeleteArticleCategoryInput = {
  articleId: string,
  categoryId: string,
};

export type DeleteCategoryInput = {
  id: string,
};

export type DeleteCommentInput = {
  id: string,
};

export type DeleteContentBlockInput = {
  id: string,
};

export type DeleteLikeInput = {
  articleId: string,
};

export type DeleteMediaInput = {
  id: string,
};

export type DeleteNotificationInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateArticleInput = {
  authorId?: string | null,
  excerpt?: string | null,
  id: string,
  publishedAt?: string | null,
  slug?: string | null,
  status?: ArticleStatus | null,
  tags?: Array< string > | null,
  title?: string | null,
};

export type UpdateCategoryInput = {
  description?: string | null,
  id: string,
  name?: string | null,
  slug?: string | null,
};

export type UpdateCommentInput = {
  articleId?: string | null,
  authorId?: string | null,
  content?: string | null,
  id: string,
  parentCommentId?: string | null,
};

export type UpdateContentBlockInput = {
  articleId?: string | null,
  content?: string | null,
  id: string,
  order?: number | null,
  title?: string | null,
};

export type UpdateMediaInput = {
  articleId?: string | null,
  contentBlockId?: string | null,
  id: string,
  type?: MediaType | null,
  url?: string | null,
};

export type UpdateNotificationInput = {
  content?: string | null,
  id: string,
  isRead?: boolean | null,
  userId?: string | null,
};

export type UpdateUserInput = {
  authId?: string | null,
  bio?: string | null,
  email?: string | null,
  id: string,
  name?: string | null,
  profilePicture?: string | null,
  role?: UserRole | null,
};

export type ModelSubscriptionArticleFilterInput = {
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  authorId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  excerpt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  publishedAt?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionArticleCategoryFilterInput = {
  and?: Array< ModelSubscriptionArticleCategoryFilterInput | null > | null,
  articleId?: ModelSubscriptionIDInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionArticleCategoryFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  slug?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionCommentFilterInput = {
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  articleId?: ModelSubscriptionIDInput | null,
  authorId?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  parentCommentId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionContentBlockFilterInput = {
  and?: Array< ModelSubscriptionContentBlockFilterInput | null > | null,
  articleId?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionContentBlockFilterInput | null > | null,
  order?: ModelSubscriptionIntInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionLikeFilterInput = {
  and?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  articleId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionMediaFilterInput = {
  and?: Array< ModelSubscriptionMediaFilterInput | null > | null,
  articleId?: ModelSubscriptionIDInput | null,
  contentBlockId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionMediaFilterInput | null > | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isRead?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  authId?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionViewFilterInput = {
  and?: Array< ModelSubscriptionViewFilterInput | null > | null,
  articleId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  identityId?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionViewFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "article",
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    categories?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    contentBlocks?:  {
      __typename: "ModelcontentBlockConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    excerpt?: string | null,
    featuredImage?:  {
      __typename: "media",
      articleId?: string | null,
      contentBlockId?: string | null,
      createdAt: string,
      id: string,
      type?: MediaType | null,
      updatedAt: string,
      url: string,
    } | null,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    slug: string,
    status?: ArticleStatus | null,
    tags: Array< string >,
    title: string,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetArticleCategoryQueryVariables = {
  articleId: string,
  categoryId: string,
};

export type GetArticleCategoryQuery = {
  getArticleCategory?:  {
    __typename: "articleCategory",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    category?:  {
      __typename: "category",
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      slug: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "category",
    articles?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    slug: string,
    updatedAt: string,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "comment",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    parentComment?:  {
      __typename: "comment",
      articleId: string,
      authorId: string,
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      parentCommentId?: string | null,
      updatedAt: string,
    } | null,
    parentCommentId?: string | null,
    replies?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetContentBlockQueryVariables = {
  id: string,
};

export type GetContentBlockQuery = {
  getContentBlock?:  {
    __typename: "contentBlock",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    content: string,
    createdAt: string,
    id: string,
    media?:  {
      __typename: "ModelmediaConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetLikeQueryVariables = {
  articleId: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "like",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type GetMediaQueryVariables = {
  id: string,
};

export type GetMediaQuery = {
  getMedia?:  {
    __typename: "media",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId?: string | null,
    contentBlock?:  {
      __typename: "contentBlock",
      articleId: string,
      content: string,
      createdAt: string,
      id: string,
      order: number,
      title?: string | null,
      updatedAt: string,
    } | null,
    contentBlockId?: string | null,
    createdAt: string,
    id: string,
    type?: MediaType | null,
    updatedAt: string,
    url: string,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "notification",
    content: string,
    createdAt: string,
    id: string,
    isRead: boolean,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "user",
    articles?:  {
      __typename: "ModelarticleConnection",
      nextToken?: string | null,
    } | null,
    authId: string,
    bio?: string | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    notifications?:  {
      __typename: "ModelnotificationConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    role?: UserRole | null,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetViewQueryVariables = {
  id: string,
};

export type GetViewQuery = {
  getView?:  {
    __typename: "view",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    createdAt: string,
    id: string,
    identityId: string,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type ListArticleCategoriesQueryVariables = {
  articleId?: string | null,
  categoryId?: ModelIDKeyConditionInput | null,
  filter?: ModelArticleCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListArticleCategoriesQuery = {
  listArticleCategories?:  {
    __typename: "ModelArticleCategoryConnection",
    items:  Array< {
      __typename: "articleCategory",
      articleId: string,
      categoryId: string,
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "category",
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      slug: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "comment",
      articleId: string,
      authorId: string,
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      parentCommentId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListContentBlocksQueryVariables = {
  filter?: ModelContentBlockFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListContentBlocksQuery = {
  listContentBlocks?:  {
    __typename: "ModelContentBlockConnection",
    items:  Array< {
      __typename: "contentBlock",
      articleId: string,
      content: string,
      createdAt: string,
      id: string,
      order: number,
      title?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  articleId?: string | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "like",
      articleId: string,
      createdAt: string,
      id: string,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMediaQueryVariables = {
  filter?: ModelMediaFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMediaQuery = {
  listMedia?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "media",
      articleId?: string | null,
      contentBlockId?: string | null,
      createdAt: string,
      id: string,
      type?: MediaType | null,
      updatedAt: string,
      url: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "notification",
      content: string,
      createdAt: string,
      id: string,
      isRead: boolean,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListViewsQueryVariables = {
  filter?: ModelViewFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListViewsQuery = {
  listViews?:  {
    __typename: "ModelViewConnection",
    items:  Array< {
      __typename: "view",
      articleId: string,
      createdAt: string,
      id: string,
      identityId: string,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AddOrUpdateSearchableRecordMutationVariables = {
  body: string,
  indexName: string,
  objectID: string,
};

export type AddOrUpdateSearchableRecordMutation = {
  addOrUpdateSearchableRecord?:  {
    __typename: "genericAPIResponse",
    content?: string | null,
  } | null,
};

export type CreateArticleMutationVariables = {
  condition?: ModelArticleConditionInput | null,
  input: CreateArticleInput,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "article",
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    categories?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    contentBlocks?:  {
      __typename: "ModelcontentBlockConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    excerpt?: string | null,
    featuredImage?:  {
      __typename: "media",
      articleId?: string | null,
      contentBlockId?: string | null,
      createdAt: string,
      id: string,
      type?: MediaType | null,
      updatedAt: string,
      url: string,
    } | null,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    slug: string,
    status?: ArticleStatus | null,
    tags: Array< string >,
    title: string,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateArticleCategoryMutationVariables = {
  condition?: ModelArticleCategoryConditionInput | null,
  input: CreateArticleCategoryInput,
};

export type CreateArticleCategoryMutation = {
  createArticleCategory?:  {
    __typename: "articleCategory",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    category?:  {
      __typename: "category",
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      slug: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: CreateCategoryInput,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "category",
    articles?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    slug: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "comment",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    parentComment?:  {
      __typename: "comment",
      articleId: string,
      authorId: string,
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      parentCommentId?: string | null,
      updatedAt: string,
    } | null,
    parentCommentId?: string | null,
    replies?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateContentBlockMutationVariables = {
  condition?: ModelContentBlockConditionInput | null,
  input: CreateContentBlockInput,
};

export type CreateContentBlockMutation = {
  createContentBlock?:  {
    __typename: "contentBlock",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    content: string,
    createdAt: string,
    id: string,
    media?:  {
      __typename: "ModelmediaConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  condition?: ModelLikeConditionInput | null,
  input: CreateLikeInput,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "like",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateMediaMutationVariables = {
  condition?: ModelMediaConditionInput | null,
  input: CreateMediaInput,
};

export type CreateMediaMutation = {
  createMedia?:  {
    __typename: "media",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId?: string | null,
    contentBlock?:  {
      __typename: "contentBlock",
      articleId: string,
      content: string,
      createdAt: string,
      id: string,
      order: number,
      title?: string | null,
      updatedAt: string,
    } | null,
    contentBlockId?: string | null,
    createdAt: string,
    id: string,
    type?: MediaType | null,
    updatedAt: string,
    url: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  condition?: ModelNotificationConditionInput | null,
  input: CreateNotificationInput,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "notification",
    content: string,
    createdAt: string,
    id: string,
    isRead: boolean,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "user",
    articles?:  {
      __typename: "ModelarticleConnection",
      nextToken?: string | null,
    } | null,
    authId: string,
    bio?: string | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    notifications?:  {
      __typename: "ModelnotificationConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    role?: UserRole | null,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateViewMutationVariables = {
  condition?: ModelViewConditionInput | null,
  input: CreateViewInput,
};

export type CreateViewMutation = {
  createView?:  {
    __typename: "view",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    createdAt: string,
    id: string,
    identityId: string,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteArticleMutationVariables = {
  condition?: ModelArticleConditionInput | null,
  input: DeleteArticleInput,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "article",
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    categories?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    contentBlocks?:  {
      __typename: "ModelcontentBlockConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    excerpt?: string | null,
    featuredImage?:  {
      __typename: "media",
      articleId?: string | null,
      contentBlockId?: string | null,
      createdAt: string,
      id: string,
      type?: MediaType | null,
      updatedAt: string,
      url: string,
    } | null,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    slug: string,
    status?: ArticleStatus | null,
    tags: Array< string >,
    title: string,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteArticleCategoryMutationVariables = {
  condition?: ModelArticleCategoryConditionInput | null,
  input: DeleteArticleCategoryInput,
};

export type DeleteArticleCategoryMutation = {
  deleteArticleCategory?:  {
    __typename: "articleCategory",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    category?:  {
      __typename: "category",
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      slug: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: DeleteCategoryInput,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "category",
    articles?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    slug: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "comment",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    parentComment?:  {
      __typename: "comment",
      articleId: string,
      authorId: string,
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      parentCommentId?: string | null,
      updatedAt: string,
    } | null,
    parentCommentId?: string | null,
    replies?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteContentBlockMutationVariables = {
  condition?: ModelContentBlockConditionInput | null,
  input: DeleteContentBlockInput,
};

export type DeleteContentBlockMutation = {
  deleteContentBlock?:  {
    __typename: "contentBlock",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    content: string,
    createdAt: string,
    id: string,
    media?:  {
      __typename: "ModelmediaConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  condition?: ModelLikeConditionInput | null,
  input: DeleteLikeInput,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "like",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteMediaMutationVariables = {
  condition?: ModelMediaConditionInput | null,
  input: DeleteMediaInput,
};

export type DeleteMediaMutation = {
  deleteMedia?:  {
    __typename: "media",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId?: string | null,
    contentBlock?:  {
      __typename: "contentBlock",
      articleId: string,
      content: string,
      createdAt: string,
      id: string,
      order: number,
      title?: string | null,
      updatedAt: string,
    } | null,
    contentBlockId?: string | null,
    createdAt: string,
    id: string,
    type?: MediaType | null,
    updatedAt: string,
    url: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  condition?: ModelNotificationConditionInput | null,
  input: DeleteNotificationInput,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "notification",
    content: string,
    createdAt: string,
    id: string,
    isRead: boolean,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteSearchableRecordMutationVariables = {
  indexName: string,
  objectID: string,
};

export type DeleteSearchableRecordMutation = {
  deleteSearchableRecord?:  {
    __typename: "genericAPIResponse",
    content?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "user",
    articles?:  {
      __typename: "ModelarticleConnection",
      nextToken?: string | null,
    } | null,
    authId: string,
    bio?: string | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    notifications?:  {
      __typename: "ModelnotificationConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    role?: UserRole | null,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateArticleMutationVariables = {
  condition?: ModelArticleConditionInput | null,
  input: UpdateArticleInput,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "article",
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    categories?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    contentBlocks?:  {
      __typename: "ModelcontentBlockConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    excerpt?: string | null,
    featuredImage?:  {
      __typename: "media",
      articleId?: string | null,
      contentBlockId?: string | null,
      createdAt: string,
      id: string,
      type?: MediaType | null,
      updatedAt: string,
      url: string,
    } | null,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    slug: string,
    status?: ArticleStatus | null,
    tags: Array< string >,
    title: string,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: UpdateCategoryInput,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "category",
    articles?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    slug: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "comment",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    parentComment?:  {
      __typename: "comment",
      articleId: string,
      authorId: string,
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      parentCommentId?: string | null,
      updatedAt: string,
    } | null,
    parentCommentId?: string | null,
    replies?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateContentBlockMutationVariables = {
  condition?: ModelContentBlockConditionInput | null,
  input: UpdateContentBlockInput,
};

export type UpdateContentBlockMutation = {
  updateContentBlock?:  {
    __typename: "contentBlock",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    content: string,
    createdAt: string,
    id: string,
    media?:  {
      __typename: "ModelmediaConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateMediaMutationVariables = {
  condition?: ModelMediaConditionInput | null,
  input: UpdateMediaInput,
};

export type UpdateMediaMutation = {
  updateMedia?:  {
    __typename: "media",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId?: string | null,
    contentBlock?:  {
      __typename: "contentBlock",
      articleId: string,
      content: string,
      createdAt: string,
      id: string,
      order: number,
      title?: string | null,
      updatedAt: string,
    } | null,
    contentBlockId?: string | null,
    createdAt: string,
    id: string,
    type?: MediaType | null,
    updatedAt: string,
    url: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  condition?: ModelNotificationConditionInput | null,
  input: UpdateNotificationInput,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "notification",
    content: string,
    createdAt: string,
    id: string,
    isRead: boolean,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "user",
    articles?:  {
      __typename: "ModelarticleConnection",
      nextToken?: string | null,
    } | null,
    authId: string,
    bio?: string | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    notifications?:  {
      __typename: "ModelnotificationConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    role?: UserRole | null,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "article",
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    categories?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    contentBlocks?:  {
      __typename: "ModelcontentBlockConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    excerpt?: string | null,
    featuredImage?:  {
      __typename: "media",
      articleId?: string | null,
      contentBlockId?: string | null,
      createdAt: string,
      id: string,
      type?: MediaType | null,
      updatedAt: string,
      url: string,
    } | null,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    slug: string,
    status?: ArticleStatus | null,
    tags: Array< string >,
    title: string,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateArticleCategorySubscriptionVariables = {
  filter?: ModelSubscriptionArticleCategoryFilterInput | null,
};

export type OnCreateArticleCategorySubscription = {
  onCreateArticleCategory?:  {
    __typename: "articleCategory",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    category?:  {
      __typename: "category",
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      slug: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "category",
    articles?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    slug: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "comment",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    parentComment?:  {
      __typename: "comment",
      articleId: string,
      authorId: string,
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      parentCommentId?: string | null,
      updatedAt: string,
    } | null,
    parentCommentId?: string | null,
    replies?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateContentBlockSubscriptionVariables = {
  filter?: ModelSubscriptionContentBlockFilterInput | null,
};

export type OnCreateContentBlockSubscription = {
  onCreateContentBlock?:  {
    __typename: "contentBlock",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    content: string,
    createdAt: string,
    id: string,
    media?:  {
      __typename: "ModelmediaConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "like",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnCreateMediaSubscription = {
  onCreateMedia?:  {
    __typename: "media",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId?: string | null,
    contentBlock?:  {
      __typename: "contentBlock",
      articleId: string,
      content: string,
      createdAt: string,
      id: string,
      order: number,
      title?: string | null,
      updatedAt: string,
    } | null,
    contentBlockId?: string | null,
    createdAt: string,
    id: string,
    type?: MediaType | null,
    updatedAt: string,
    url: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "notification",
    content: string,
    createdAt: string,
    id: string,
    isRead: boolean,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "user",
    articles?:  {
      __typename: "ModelarticleConnection",
      nextToken?: string | null,
    } | null,
    authId: string,
    bio?: string | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    notifications?:  {
      __typename: "ModelnotificationConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    role?: UserRole | null,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateViewSubscriptionVariables = {
  filter?: ModelSubscriptionViewFilterInput | null,
};

export type OnCreateViewSubscription = {
  onCreateView?:  {
    __typename: "view",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    createdAt: string,
    id: string,
    identityId: string,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "article",
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    categories?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    contentBlocks?:  {
      __typename: "ModelcontentBlockConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    excerpt?: string | null,
    featuredImage?:  {
      __typename: "media",
      articleId?: string | null,
      contentBlockId?: string | null,
      createdAt: string,
      id: string,
      type?: MediaType | null,
      updatedAt: string,
      url: string,
    } | null,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    slug: string,
    status?: ArticleStatus | null,
    tags: Array< string >,
    title: string,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteArticleCategorySubscriptionVariables = {
  filter?: ModelSubscriptionArticleCategoryFilterInput | null,
};

export type OnDeleteArticleCategorySubscription = {
  onDeleteArticleCategory?:  {
    __typename: "articleCategory",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    category?:  {
      __typename: "category",
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      slug: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "category",
    articles?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    slug: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "comment",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    parentComment?:  {
      __typename: "comment",
      articleId: string,
      authorId: string,
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      parentCommentId?: string | null,
      updatedAt: string,
    } | null,
    parentCommentId?: string | null,
    replies?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentBlockSubscriptionVariables = {
  filter?: ModelSubscriptionContentBlockFilterInput | null,
};

export type OnDeleteContentBlockSubscription = {
  onDeleteContentBlock?:  {
    __typename: "contentBlock",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    content: string,
    createdAt: string,
    id: string,
    media?:  {
      __typename: "ModelmediaConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "like",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnDeleteMediaSubscription = {
  onDeleteMedia?:  {
    __typename: "media",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId?: string | null,
    contentBlock?:  {
      __typename: "contentBlock",
      articleId: string,
      content: string,
      createdAt: string,
      id: string,
      order: number,
      title?: string | null,
      updatedAt: string,
    } | null,
    contentBlockId?: string | null,
    createdAt: string,
    id: string,
    type?: MediaType | null,
    updatedAt: string,
    url: string,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "notification",
    content: string,
    createdAt: string,
    id: string,
    isRead: boolean,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "user",
    articles?:  {
      __typename: "ModelarticleConnection",
      nextToken?: string | null,
    } | null,
    authId: string,
    bio?: string | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    notifications?:  {
      __typename: "ModelnotificationConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    role?: UserRole | null,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "article",
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    categories?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    contentBlocks?:  {
      __typename: "ModelcontentBlockConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    excerpt?: string | null,
    featuredImage?:  {
      __typename: "media",
      articleId?: string | null,
      contentBlockId?: string | null,
      createdAt: string,
      id: string,
      type?: MediaType | null,
      updatedAt: string,
      url: string,
    } | null,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    slug: string,
    status?: ArticleStatus | null,
    tags: Array< string >,
    title: string,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "category",
    articles?:  {
      __typename: "ModelarticleCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    slug: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "comment",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    author?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    authorId: string,
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    parentComment?:  {
      __typename: "comment",
      articleId: string,
      authorId: string,
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      parentCommentId?: string | null,
      updatedAt: string,
    } | null,
    parentCommentId?: string | null,
    replies?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentBlockSubscriptionVariables = {
  filter?: ModelSubscriptionContentBlockFilterInput | null,
};

export type OnUpdateContentBlockSubscription = {
  onUpdateContentBlock?:  {
    __typename: "contentBlock",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId: string,
    content: string,
    createdAt: string,
    id: string,
    media?:  {
      __typename: "ModelmediaConnection",
      nextToken?: string | null,
    } | null,
    order: number,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnUpdateMediaSubscription = {
  onUpdateMedia?:  {
    __typename: "media",
    article?:  {
      __typename: "article",
      authorId: string,
      createdAt: string,
      excerpt?: string | null,
      id: string,
      publishedAt?: string | null,
      slug: string,
      status?: ArticleStatus | null,
      tags: Array< string >,
      title: string,
      updatedAt: string,
    } | null,
    articleId?: string | null,
    contentBlock?:  {
      __typename: "contentBlock",
      articleId: string,
      content: string,
      createdAt: string,
      id: string,
      order: number,
      title?: string | null,
      updatedAt: string,
    } | null,
    contentBlockId?: string | null,
    createdAt: string,
    id: string,
    type?: MediaType | null,
    updatedAt: string,
    url: string,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "notification",
    content: string,
    createdAt: string,
    id: string,
    isRead: boolean,
    updatedAt: string,
    user?:  {
      __typename: "user",
      authId: string,
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      role?: UserRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "user",
    articles?:  {
      __typename: "ModelarticleConnection",
      nextToken?: string | null,
    } | null,
    authId: string,
    bio?: string | null,
    comments?:  {
      __typename: "ModelcommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    likes?:  {
      __typename: "ModellikeConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    notifications?:  {
      __typename: "ModelnotificationConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    profilePicture?: string | null,
    role?: UserRole | null,
    updatedAt: string,
    views?:  {
      __typename: "ModelviewConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};
