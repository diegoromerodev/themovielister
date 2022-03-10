import { DataTypes } from "sequelize";
import pgSequelize from "../lib/sequelize";
import Post from "./post";
import User from "./user";

const Comment = pgSequelize.define("Comment", {
  body: DataTypes.STRING,
});

Comment.belongsTo(Post);
Comment.belongsTo(User);

export default Comment;
