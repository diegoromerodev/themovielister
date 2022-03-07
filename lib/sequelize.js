import { Sequelize } from "sequelize";

const pgSequelize = new Sequelize(process.env.PG_DATABASE);

export default pgSequelize;
