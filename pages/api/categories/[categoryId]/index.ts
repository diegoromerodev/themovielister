import { NextApiRequest, NextApiResponse } from "next";
import Category from "../../../../schemas/category";
import Movie from "../../../../schemas/movie";
import Post from "../../../../schemas/post";
import User from "../../../../schemas/user";

const getCategory = async (categoryId: number) => {
  const category = await Category.findByPk(categoryId, {
    include: [
      {
        model: Post,
        include: [User, Movie],
      },
    ],
  });
  return category;
};

const categoryHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { categoryId } = req.query;
  let catData;
  switch (req.method) {
    case "GET":
      catData = await getCategory(Number(categoryId));
      break;
    default:
      return res.status(400).json({ error: "No such endpoint." });
  }
  if (!catData) return res.status(404).json({ error: "Category not found." });
  return res.json(catData);
};

export default categoryHandler;
