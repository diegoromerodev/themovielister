import { DataTypes } from "sequelize";
import pgSequelize from "../lib/sequelize";

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

export default Post;
