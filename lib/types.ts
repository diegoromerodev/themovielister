/* eslint-disable no-use-before-define */
import { Dispatch, SetStateAction } from "react";
import { Model } from "sequelize/types";

export interface MovieSchema extends Model {
  imdbId?: string;
  imageURL?: string;
  title?: string;
  year?: number;
}

export interface UserSchema extends Model {
  id?: number;
  createdAt?: string;
  username?: string;
  avatarURL?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: string;
}

export interface CategorySchema extends Model {
  id?: number;
  name?: string;
  Posts?: PostSchema[];
}

export interface PostSchema extends Model {
  id?: number;
  title?: string;
  body?: string;
  setUser?: (user: UserSchema) => Promise<void>;
  setMovie?: (movie: MovieSchema) => Promise<void>;
  setCategory?: (category: CategorySchema) => Promise<void>;
  UserId?: number | null;
  createdAt?: string;
  Movie?: MovieSchema;
  User?: UserSchema;
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

export type AppDataContext = [
  {
    userData: UserSchema;
  },
  Dispatch<SetStateAction<unknown>>
];
