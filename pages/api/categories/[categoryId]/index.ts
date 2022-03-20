import { NextApiRequest, NextApiResponse } from "next";
import Category from "../../../../schemas/category";

const getCategory = async (categoryId: number) => {
  const category = await Category.findByPk(categoryId);
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
      return res.status(400).json("NO SUCH ENDPOINT");
  }
  if (!catData) return res.status(404).json("CATEGORY NOT FOUND");
  return res.json(catData);
};

export default categoryHandler;
