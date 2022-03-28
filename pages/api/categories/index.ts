import { NextApiRequest, NextApiResponse } from "next";
import pgSequelize from "../../../lib/sequelize";
import Category from "../../../schemas/category";
import Post from "../../../schemas/post";
import User from "../../../schemas/user";

const categoriesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let catData;
  try {
    switch (req.method) {
      case "POST":
        catData = await Category.create({
          name: req.body.name,
        });
        break;
      default:
        [catData] = await pgSequelize.query(
          `SELECT * FROM "Categories" 
          JOIN "Posts" ON "Categories".id = "Posts"."CategoryId"
          JOIN "Users" ON "Users".id = "Posts"."UserId";`
        );
        console.log({ catData });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send("Invalid request");
  }
  return res.json(catData);
};

export default categoriesHandler;
