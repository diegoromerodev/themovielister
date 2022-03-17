import { Model } from "sequelize/types";

export interface UserSchema extends Model {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export interface PostSchema extends Model {
  id?: number;
  title?: string;
  body?: string;
  setUser?: (user: Model) => void;
  UserId?: number | null;
}

export interface CommentSchema extends Model {
  id?: number;
  body?: string;
  UserId?: number;
}

export interface CommentPostQuery {
  postId?: string | number | undefined;
  commentId?: string | number | undefined;
}
