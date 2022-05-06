import { NextApiRequest, NextApiResponse } from "next";
import tokenMiddleware from "../../../lib/tokenMiddleware";
import Category from "../../../schemas/category";
import Movie from "../../../schemas/movie";
import Post from "../../../schemas/post";
import User from "../../../schemas/user";

const categoriesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let user;
  try {
    user = await tokenMiddleware(req);
  } catch (err) {
    user = false;
  }
  let catData;
  try {
    switch (req.method) {
      case "POST":
        if (!user || user.role === "member")
          return res.status(401).json({ error: "Not enough privileges." });
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
    return res.status(400).json({ error: "Something went wrong..." });
  }
  return res.json(catData);
};

export default categoriesHandler;
