import { Schema } from "@/amplify/data/resource";

type ComparisonOperator =
  | 'eq'           // Equal
  | 'ne'           // Not Equal
  | 'le'           // Less Than or Equal
  | 'lt'           // Less Than
  | 'ge'           // Greater Than or Equal
  | 'gt'           // Greater Than
  | 'contains'     // Contains
  | 'not_contains' // Does Not Contain
  | 'begins_with'  // Begins With
  | 'between'      // Between
  | 'in';          // In

type FieldCondition = { [operator in ComparisonOperator]?: any };

type FilterCondition = {
  [field: string]: FieldCondition | undefined;
};

export interface ListOptions {
  filter?: FilterCondition;
  limit?: number;
  nextToken?: string;
  sortDirection?: 'ASC' | 'DESC';
}

export enum UserRole {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  AUTHOR = 'AUTHOR',
  SUBSCRIBER = 'SUBSCRIBER'
}

export enum ArticleStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}

export enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO'
}

type UserSchema = Schema['user']['type'];
export interface User extends UserSchema {
  role: UserRole
};

type ArticleSchema = Schema['article']['type'];
export interface Article extends ArticleSchema {
  status: ArticleStatus
};

type CommentSchema = Schema['comment']['type'];
export interface Comment extends CommentSchema { };

type ContentBlockSchema = Schema['contentBlock']['type'];
export interface ContentBlock extends ContentBlockSchema { };

type LikeSchema = Schema['like']['type'];
export interface Like extends LikeSchema { };

type ViewSchema = Schema['view']['type'];
export interface View extends ViewSchema { };

type NotificationSchema = Schema['notification']['type'];
export interface Notification extends NotificationSchema { };

type MediaSchema = Schema['media']['type'];
export interface Media extends MediaSchema {
  type: MediaType
};

type CategorySchema = Schema['category']['type'];
export interface Category extends CategorySchema { };

type ArticleCategorySchema = Schema['articleCategory']['type'];
export interface ArticleCategory extends ArticleCategorySchema { };

