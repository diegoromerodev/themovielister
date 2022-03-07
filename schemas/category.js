import { DataTypes } from "sequelize";
import pgSequelize from "../lib/sequelize";

const Category = pgSequelize.define("Category", {
  name: DataTypes.STRING,
});

export default Category;
