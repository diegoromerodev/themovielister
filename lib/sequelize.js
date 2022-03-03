import { Sequelize } from "sequelize";

const pgSequelize = new Sequelize(process.env.PG_DATABASE, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default pgSequelize;
