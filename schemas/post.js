import { DataTypes } from "sequelize";
import pgSequelize from "../lib/sequelize";
import Category from "./category";
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
  movie: {
    type: DataTypes.INTEGER,
  },
});

Post.belongsTo(User);
Post.belongsToMany(Category, { through: "Post_Category" });

export default Post;
