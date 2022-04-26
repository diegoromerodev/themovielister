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
      avatarURL:
        "https://pbs.twimg.com/profile_images/1097177754963988480/3l0y3F-3_400x400.jpg",
      password: await bcrypt.hash("5278182@@@@", 5),
      bio: "A tall, solidly-built, fair skinned man with a triangular face. He has a distinctive walk, has straight, black hair, and has tattoos fully covering his face, left leg, hands and neck.",
      role: "admin",
    });
    return res.status(200).json({ status: "Successfully started." });
  } catch (e) {
    return res.status(500).json({ error: "Startup failed." });
  }
};

export default startupHandler;
