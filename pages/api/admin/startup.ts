import { NextApiResponse } from "next";
import pgSequelize from "../../../lib/sequelize";
import User from "../../../schemas/user";
import Post from "../../../schemas/post";
import Category from "../../../schemas/category";

const startupHandler = async (_, res: NextApiResponse) => {
  try {
    await pgSequelize.authenticate();
    await User.sync({ force: true });
    await Post.sync({ force: true });
    await Category.sync({ force: true });
    return res.status(200).send("SUCCESS");
  } catch (e) {
    console.log(e);
    return res.status(500).send("FAILED");
  }
};

export default startupHandler;
