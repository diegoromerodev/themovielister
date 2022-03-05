import { DataTypes } from "sequelize";
import pgSequelize from "../lib/sequelize";
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

export default Post;
