/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onCreateArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onCreateArticleCategory = /* GraphQL */ `subscription OnCreateArticleCategory(
  $filter: ModelSubscriptionArticleCategoryFilterInput
) {
  onCreateArticleCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateArticleCategorySubscriptionVariables,
  APITypes.OnCreateArticleCategorySubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onCreateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onCreateContentBlock = /* GraphQL */ `subscription OnCreateContentBlock(
  $filter: ModelSubscriptionContentBlockFilterInput
) {
  onCreateContentBlock(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentBlockSubscriptionVariables,
  APITypes.OnCreateContentBlockSubscription
>;
export const onCreateLike = /* GraphQL */ `subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
  onCreateLike(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLikeSubscriptionVariables,
  APITypes.OnCreateLikeSubscription
>;
export const onCreateMedia = /* GraphQL */ `subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
  onCreateMedia(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMediaSubscriptionVariables,
  APITypes.OnCreateMediaSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onCreateView = /* GraphQL */ `subscription OnCreateView($filter: ModelSubscriptionViewFilterInput) {
  onCreateView(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViewSubscriptionVariables,
  APITypes.OnCreateViewSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
  onDeleteArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
export const onDeleteArticleCategory = /* GraphQL */ `subscription OnDeleteArticleCategory(
  $filter: ModelSubscriptionArticleCategoryFilterInput
) {
  onDeleteArticleCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteArticleCategorySubscriptionVariables,
  APITypes.OnDeleteArticleCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onDeleteComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onDeleteContentBlock = /* GraphQL */ `subscription OnDeleteContentBlock(
  $filter: ModelSubscriptionContentBlockFilterInput
) {
  onDeleteContentBlock(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentBlockSubscriptionVariables,
  APITypes.OnDeleteContentBlockSubscription
>;
export const onDeleteLike = /* GraphQL */ `subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
  onDeleteLike(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLikeSubscriptionVariables,
  APITypes.OnDeleteLikeSubscription
>;
export const onDeleteMedia = /* GraphQL */ `subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
  onDeleteMedia(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMediaSubscriptionVariables,
  APITypes.OnDeleteMediaSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onUpdateArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onUpdateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onUpdateContentBlock = /* GraphQL */ `subscription OnUpdateContentBlock(
  $filter: ModelSubscriptionContentBlockFilterInput
) {
  onUpdateContentBlock(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentBlockSubscriptionVariables,
  APITypes.OnUpdateContentBlockSubscription
>;
export const onUpdateMedia = /* GraphQL */ `subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
  onUpdateMedia(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMediaSubscriptionVariables,
  APITypes.OnUpdateMediaSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
