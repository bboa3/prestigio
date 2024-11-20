/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addOrUpdateSearchableRecord = /* GraphQL */ `mutation AddOrUpdateSearchableRecord(
  $body: AWSJSON!
  $indexName: String!
  $objectID: String!
) {
  addOrUpdateSearchableRecord(
    body: $body
    indexName: $indexName
    objectID: $objectID
  ) {
    content
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddOrUpdateSearchableRecordMutationVariables,
  APITypes.AddOrUpdateSearchableRecordMutation
>;
export const createArticle = /* GraphQL */ `mutation CreateArticle(
  $condition: ModelArticleConditionInput
  $input: CreateArticleInput!
) {
  createArticle(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateArticleMutationVariables,
  APITypes.CreateArticleMutation
>;
export const createArticleCategory = /* GraphQL */ `mutation CreateArticleCategory(
  $condition: ModelArticleCategoryConditionInput
  $input: CreateArticleCategoryInput!
) {
  createArticleCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateArticleCategoryMutationVariables,
  APITypes.CreateArticleCategoryMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $condition: ModelCategoryConditionInput
  $input: CreateCategoryInput!
) {
  createCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $condition: ModelCommentConditionInput
  $input: CreateCommentInput!
) {
  createComment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const createContentBlock = /* GraphQL */ `mutation CreateContentBlock(
  $condition: ModelContentBlockConditionInput
  $input: CreateContentBlockInput!
) {
  createContentBlock(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateContentBlockMutationVariables,
  APITypes.CreateContentBlockMutation
>;
export const createLike = /* GraphQL */ `mutation CreateLike(
  $condition: ModelLikeConditionInput
  $input: CreateLikeInput!
) {
  createLike(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateLikeMutationVariables,
  APITypes.CreateLikeMutation
>;
export const createMedia = /* GraphQL */ `mutation CreateMedia(
  $condition: ModelMediaConditionInput
  $input: CreateMediaInput!
) {
  createMedia(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateMediaMutationVariables,
  APITypes.CreateMediaMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $condition: ModelNotificationConditionInput
  $input: CreateNotificationInput!
) {
  createNotification(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createView = /* GraphQL */ `mutation CreateView(
  $condition: ModelViewConditionInput
  $input: CreateViewInput!
) {
  createView(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateViewMutationVariables,
  APITypes.CreateViewMutation
>;
export const deleteArticle = /* GraphQL */ `mutation DeleteArticle(
  $condition: ModelArticleConditionInput
  $input: DeleteArticleInput!
) {
  deleteArticle(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteArticleMutationVariables,
  APITypes.DeleteArticleMutation
>;
export const deleteArticleCategory = /* GraphQL */ `mutation DeleteArticleCategory(
  $condition: ModelArticleCategoryConditionInput
  $input: DeleteArticleCategoryInput!
) {
  deleteArticleCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteArticleCategoryMutationVariables,
  APITypes.DeleteArticleCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $condition: ModelCategoryConditionInput
  $input: DeleteCategoryInput!
) {
  deleteCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $condition: ModelCommentConditionInput
  $input: DeleteCommentInput!
) {
  deleteComment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const deleteContentBlock = /* GraphQL */ `mutation DeleteContentBlock(
  $condition: ModelContentBlockConditionInput
  $input: DeleteContentBlockInput!
) {
  deleteContentBlock(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteContentBlockMutationVariables,
  APITypes.DeleteContentBlockMutation
>;
export const deleteLike = /* GraphQL */ `mutation DeleteLike(
  $condition: ModelLikeConditionInput
  $input: DeleteLikeInput!
) {
  deleteLike(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteLikeMutationVariables,
  APITypes.DeleteLikeMutation
>;
export const deleteMedia = /* GraphQL */ `mutation DeleteMedia(
  $condition: ModelMediaConditionInput
  $input: DeleteMediaInput!
) {
  deleteMedia(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteMediaMutationVariables,
  APITypes.DeleteMediaMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $condition: ModelNotificationConditionInput
  $input: DeleteNotificationInput!
) {
  deleteNotification(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const deleteSearchableRecord = /* GraphQL */ `mutation DeleteSearchableRecord($indexName: String!, $objectID: String!) {
  deleteSearchableRecord(indexName: $indexName, objectID: $objectID) {
    content
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSearchableRecordMutationVariables,
  APITypes.DeleteSearchableRecordMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateArticle = /* GraphQL */ `mutation UpdateArticle(
  $condition: ModelArticleConditionInput
  $input: UpdateArticleInput!
) {
  updateArticle(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateArticleMutationVariables,
  APITypes.UpdateArticleMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $condition: ModelCategoryConditionInput
  $input: UpdateCategoryInput!
) {
  updateCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $condition: ModelCommentConditionInput
  $input: UpdateCommentInput!
) {
  updateComment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const updateContentBlock = /* GraphQL */ `mutation UpdateContentBlock(
  $condition: ModelContentBlockConditionInput
  $input: UpdateContentBlockInput!
) {
  updateContentBlock(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateContentBlockMutationVariables,
  APITypes.UpdateContentBlockMutation
>;
export const updateMedia = /* GraphQL */ `mutation UpdateMedia(
  $condition: ModelMediaConditionInput
  $input: UpdateMediaInput!
) {
  updateMedia(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateMediaMutationVariables,
  APITypes.UpdateMediaMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $condition: ModelNotificationConditionInput
  $input: UpdateNotificationInput!
) {
  updateNotification(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
