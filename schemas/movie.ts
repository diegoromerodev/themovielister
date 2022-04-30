import { DataTypes } from "sequelize";
import pgSequelize from "../lib/sequelize";

const Movie = pgSequelize.define("Movie", {
  title: DataTypes.STRING,
  imageURL: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
  imdbId: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    validate: {
      isAlphanumeric: true,
    },
  },
  year: DataTypes.INTEGER,
});

export default Movie;
