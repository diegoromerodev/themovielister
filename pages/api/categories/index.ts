import { NextApiRequest, NextApiResponse } from "next";
import Category from "../../../schemas/category";
import Movie from "../../../schemas/movie";
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
        catData = await Category.findAll({
          include: [
            {
              model: Post,
              include: [User, Movie],
            },
          ],
        });
    }
  } catch (err) {
    return res.status(400).send("Invalid request");
  }
  return res.json(catData);
};

export default categoriesHandler;
