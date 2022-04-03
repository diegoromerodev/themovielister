import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import pgSequelize from "../../../lib/sequelize";
import User from "../../../schemas/user";
import Post from "../../../schemas/post";
import Category from "../../../schemas/category";
import Comment from "../../../schemas/comment";
import Movie from "../../../schemas/movie";

const startupHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(400).json("NO SUCH ENDPOINT");
  const { secret } = req.body;
  if (secret !== process.env.TOKENSECRET) {
    return res.status(403).json("FORBIDDEN");
  }
  try {
    await pgSequelize.authenticate();
    await Movie.sync({ force: true });
    await User.sync({ force: true });
    await Post.sync({ force: true });
    await Category.sync({ force: true });
    await Comment.sync({ force: true });
    await User.create({
      firstName: "Diego",
      lastName: "Romero",
      email: "diegoromeroxd@email.com",
      username: "dieg0r0m3r0",
      avatarURL: "https://i.ytimg.com/vi/EbUsZEs_1Yg/maxresdefault.jpg",
      password: await bcrypt.hash("5278182@@@@", 5),
      role: "admin",
    });
    return res.status(200).send("SUCCESS");
  } catch (e) {
    console.log(e);
    return res.status(500).send("FAILED");
  }
};

export default startupHandler;
