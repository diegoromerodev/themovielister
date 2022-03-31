import { Model } from "sequelize/types";

export interface MovieSchema extends Model {
  imageURL?: string;
  title?: string;
  year: number;
}

export interface UserSchema extends Model {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: string;
}

export interface PostSchema extends Model {
  id?: number;
  title?: string;
  body?: string;
  setUser?: (user: Model) => void;
  UserId?: number | null;
  createdAt?: string;
  Movie?: MovieSchema;
  User?: UserSchema;
}

export interface CategorySchema extends Model {
  id?: number;
  name?: string;
  Posts?: PostSchema[];
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
