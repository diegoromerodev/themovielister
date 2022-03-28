import { DataTypes } from "sequelize";
import pgSequelize from "../lib/sequelize";
import Category from "./category";
import Movie from "./movie";
import User from "./user";

const Post = pgSequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Post.belongsTo(User);
Post.belongsTo(Category);
Category.hasMany(Post);
Post.belongsTo(Movie, {
  foreignKey: "MovieId",
});

export default Post;
