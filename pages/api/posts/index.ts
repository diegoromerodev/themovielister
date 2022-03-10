import { NextApiRequest, NextApiResponse } from "next";
import { Model } from "sequelize";
import tokenMiddleware from "../../../lib/tokenMiddleware";
import Post from "../../../schemas/post";

interface PostSchema extends Model {
  setUser?: (user: Model) => void;
}

const newPost = async ({ title, body, movie }, user) => {
  if (!user) return false;
  const post: PostSchema = await Post.create({
    title,
    body,
    movie,
    UserId: user.id,
  });
  post.setUser(user);
  return post;
};

const postsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let user;
  try {
    user = await tokenMiddleware(req);
  } catch (err) {
    user = false;
  }
  let postData;
  try {
    switch (req.method) {
      case "POST":
        if (!user) return res.status(401).json("UNAUTHORIZED");
        postData = await newPost(req.body, user);
        break;
      default:
        postData = await Post.findAll();
        break;
    }
  } catch (err) {
    return res.status(400).send({ error: err });
  }
  return res.json(postData);
};

export default postsHandler;
