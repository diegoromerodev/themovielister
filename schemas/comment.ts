import { DataTypes, Model } from "sequelize";
import pgSequelize from "../lib/sequelize";
import Post from "./post";
import User from "./user";

class CommentModel extends Model {
  toJSON() {
    const allAttrs = { ...this.get() };
    delete allAttrs.User?.password;
    return allAttrs;
  }
}

const Comment = CommentModel.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: pgSequelize,
    modelName: "Comment",
  }
);

Comment.belongsTo(Post, {
  onDelete: "CASCADE",
});
Comment.belongsTo(User);

export default Comment;
