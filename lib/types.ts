import { Model } from "sequelize/types";

export interface PostSchema extends Model {
  setUser?: (user: Model) => void;
  UserId?: number | null;
}

export interface CommentSchema extends Model {
  body?: string;
}

export interface CommentPostQuery {
  postId?: string | number | undefined;
  commentId?: string | number | undefined;
}
