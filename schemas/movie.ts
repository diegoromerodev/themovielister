import { DataTypes } from "sequelize";
import pgSequelize from "../lib/sequelize";

const Movie = pgSequelize.define("Movie", {
  title: DataTypes.STRING,
  imageURL: DataTypes.STRING,
  imdbId: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
  },
  year: DataTypes.INTEGER,
});

export default Movie;
