import { Model } from "sequelize/types";

export interface PostSchema extends Model {
  setUser?: (user: Model) => void;
  UserId?: number | null;
}
