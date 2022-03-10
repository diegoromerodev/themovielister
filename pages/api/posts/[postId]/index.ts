import { NextApiRequest, NextApiResponse } from "next";
import { Model } from "sequelize/types";
import Post from "../../../../schemas/post";

const getPost = async (postId: number): Promise<Model | null> => {
  try {
    const post = await Post.findByPk(postId);
    return post;
  } catch (err) {
    return null;
  }
};

const postFinder = async (req: NextApiRequest, res: NextApiResponse) => {
  const { postId } = req.query;
  let postData;
  switch (req.method) {
    case "GET":
      postData = await getPost(Number(postId));
      break;
    default:
      return res.status(400).json("NO SUCH ENDPOINT");
  }

  if (!postData) return res.status(404).json("POST NOT FOUND");

  return res.json(postData);
};

export default postFinder;
