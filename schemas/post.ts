import { DataTypes, Model } from "sequelize";
import pgSequelize from "../lib/sequelize";
import Category from "./category";
import Movie from "./movie";
import User from "./user";

class PostModel extends Model {
  toJSON() {
    const allAttrs = { ...this.get() };
    delete allAttrs.User?.password;
    return allAttrs;
  }
}

const Post = PostModel.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: pgSequelize,
    modelName: "Post",
  }
);

Post.belongsTo(User);
Post.belongsTo(Category);
Category.hasMany(Post);
Post.belongsTo(Movie, {
  foreignKey: "MovieId",
});

export default Post;
