import { DataTypes } from "sequelize";
import pgSequelize from "../lib/sequelize";
import Post from "./post";

const Category = pgSequelize.define("Category", {
  name: DataTypes.STRING,
});

Category.belongsToMany(Post, { through: "Post_Category" });

export default Category;
