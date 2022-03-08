import { NextApiRequest, NextApiResponse } from "next";
import { Model } from "sequelize";
import Post from "../../../schemas/post";
import User from "../../../schemas/user";

interface PostSchema extends Model {
  setUser?: (user: Model) => void;
}

const newPost = async ({ title, body, movie, userId }) => {
  const post: PostSchema = await Post.create({
    title,
    body,
    movie,
  });
  const user = await User.findByPk(userId);
  post.setUser(user);
  return post;
};

const postsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let postData;
  try {
    switch (req.method) {
      case "POST":
        postData = await newPost(req.body);
        break;
      default:
        postData = await Post.findAll();
        break;
    }
  } catch (err) {
    return res.status(400).send("Invalid request");
  }
  return res.json(postData);
};

export default postsHandler;
