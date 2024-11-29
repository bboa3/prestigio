/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    author {
      authId
      bio
      createdAt
      email
      id
      name
      owner
      profilePicture
      role
      updatedAt
      __typename
    }
    authorId
    categories {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    contentBlocks {
      nextToken
      __typename
    }
    createdAt
    excerpt
    featuredImage {
      articleId
      contentBlockId
      createdAt
      id
      type
      updatedAt
      url
      __typename
    }
    id
    likes {
      nextToken
      __typename
    }
    publishedAt
    slug
    status
    tags
    title
    updatedAt
    views {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleQueryVariables,
  APITypes.GetArticleQuery
>;
export const getArticleCategory = /* GraphQL */ `query GetArticleCategory($articleId: ID!, $categoryId: ID!) {
  getArticleCategory(articleId: $articleId, categoryId: $categoryId) {
    article {
      authorId
      createdAt
      excerpt
      id
      publishedAt
      slug
      status
      tags
      title
      updatedAt
      __typename
    }
    articleId
    category {
      createdAt
      description
      id
      name
      slug
      updatedAt
      __typename
    }
    categoryId
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleCategoryQueryVariables,
  APITypes.GetArticleCategoryQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    articles {
      nextToken
      __typename
    }
    createdAt
    description
    id
    name
    slug
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    article {
      authorId
      createdAt
      excerpt
      id
      publishedAt
      slug
      status
      tags
      title
      updatedAt
      __typename
    }
    articleId
    author {
      authId
      bio
      createdAt
      email
      id
      name
      owner
      profilePicture
      role
      updatedAt
      __typename
    }
    authorId
    content
    createdAt
    id
    owner
    parentComment {
      articleId
      authorId
      content
      createdAt
      id
      owner
      parentCommentId
      updatedAt
      __typename
    }
    parentCommentId
    replies {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const getContentBlock = /* GraphQL */ `query GetContentBlock($id: ID!) {
  getContentBlock(id: $id) {
    article {
      authorId
      createdAt
      excerpt
      id
      publishedAt
      slug
      status
      tags
      title
      updatedAt
      __typename
    }
    articleId
    content
    createdAt
    id
    media {
      nextToken
      __typename
    }
    order
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContentBlockQueryVariables,
  APITypes.GetContentBlockQuery
>;
export const getLike = /* GraphQL */ `query GetLike($articleId: ID!) {
  getLike(articleId: $articleId) {
    article {
      authorId
      createdAt
      excerpt
      id
      publishedAt
      slug
      status
      tags
      title
      updatedAt
      __typename
    }
    articleId
    createdAt
    id
    updatedAt
    user {
      authId
      bio
      createdAt
      email
      id
      name
      owner
      profilePicture
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLikeQueryVariables, APITypes.GetLikeQuery>;
export const getMedia = /* GraphQL */ `query GetMedia($id: ID!) {
  getMedia(id: $id) {
    article {
      authorId
      createdAt
      excerpt
      id
      publishedAt
      slug
      status
      tags
      title
      updatedAt
      __typename
    }
    articleId
    contentBlock {
      articleId
      content
      createdAt
      id
      order
      title
      updatedAt
      __typename
    }
    contentBlockId
    createdAt
    id
    type
    updatedAt
    url
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMediaQueryVariables, APITypes.GetMediaQuery>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    content
    createdAt
    id
    isRead
    updatedAt
    user {
      authId
      bio
      createdAt
      email
      id
      name
      owner
      profilePicture
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    articles {
      nextToken
      __typename
    }
    authId
    bio
    comments {
      nextToken
      __typename
    }
    createdAt
    email
    id
    likes {
      nextToken
      __typename
    }
    name
    notifications {
      nextToken
      __typename
    }
    owner
    profilePicture
    role
    updatedAt
    views {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getView = /* GraphQL */ `query GetView($id: ID!) {
  getView(id: $id) {
    article {
      authorId
      createdAt
      excerpt
      id
      publishedAt
      slug
      status
      tags
      title
      updatedAt
      __typename
    }
    articleId
    createdAt
    id
    identityId
    updatedAt
    user {
      authId
      bio
      createdAt
      email
      id
      name
      owner
      profilePicture
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetViewQueryVariables, APITypes.GetViewQuery>;
export const listArticleCategories = /* GraphQL */ `query ListArticleCategories(
  $articleId: ID
  $categoryId: ModelIDKeyConditionInput
  $filter: ModelArticleCategoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listArticleCategories(
    articleId: $articleId
    categoryId: $categoryId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      articleId
      categoryId
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticleCategoriesQueryVariables,
  APITypes.ListArticleCategoriesQuery
>;
export const listArticles = /* GraphQL */ `query ListArticles(
  $filter: ModelArticleFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listArticles(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      authorId
      createdAt
      excerpt
      id
      publishedAt
      slug
      status
      tags
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticlesQueryVariables,
  APITypes.ListArticlesQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCategories(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      description
      id
      name
      slug
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listComments(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      articleId
      authorId
      content
      createdAt
      id
      owner
      parentCommentId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const listContentBlocks = /* GraphQL */ `query ListContentBlocks(
  $filter: ModelContentBlockFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listContentBlocks(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      articleId
      content
      createdAt
      id
      order
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentBlocksQueryVariables,
  APITypes.ListContentBlocksQuery
>;
export const listLikes = /* GraphQL */ `query ListLikes(
  $articleId: ID
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLikes(
    articleId: $articleId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      articleId
      createdAt
      id
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLikesQueryVariables, APITypes.ListLikesQuery>;
export const listMedia = /* GraphQL */ `query ListMedia(
  $filter: ModelMediaFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMedia(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      articleId
      contentBlockId
      createdAt
      id
      type
      updatedAt
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMediaQueryVariables, APITypes.ListMediaQuery>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listNotifications(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      content
      createdAt
      id
      isRead
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      authId
      bio
      createdAt
      email
      id
      name
      owner
      profilePicture
      role
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const listViews = /* GraphQL */ `query ListViews(
  $filter: ModelViewFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listViews(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      articleId
      createdAt
      id
      identityId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListViewsQueryVariables, APITypes.ListViewsQuery>;
