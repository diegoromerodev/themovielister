import { NextApiRequest, NextApiResponse } from "next";
import { Model } from "sequelize/types";
import tokenMiddleware from "../../../../lib/tokenMiddleware";
import { PostSchema } from "../../../../lib/types";
import Post from "../../../../schemas/post";

type PostId = string | number | undefined;

interface IdBody {
  postId?: PostId;
}

const getPost = async (postId: number): Promise<Model | null> => {
  try {
    const post = await Post.findByPk(postId);
    return post;
  } catch (err) {
    return null;
  }
};

const deletePost = async (postId: number, user) => {
  const postToDelete: PostSchema = await getPost(postId);
  if (postToDelete.UserId !== user.id) {
    return false;
  }
  await postToDelete.destroy();
  return true;
};

const postFinder = async (req: NextApiRequest, res: NextApiResponse) => {
  let { postId }: IdBody = req.query;
  postId = Number(postId);
  let user;
  try {
    user = await tokenMiddleware(req);
  } catch (err) {
    user = false;
  }
  let postData;
  switch (req.method) {
    case "GET":
      postData = await getPost(postId);
      break;
    case "DELETE":
      if (typeof postId === "number") {
        postData = await deletePost(postId, user);
      }
      break;
    default:
      return res.status(400).json("NO SUCH ENDPOINT");
  }

  if (!postData) return res.status(404).json("POST NOT FOUND");

  return res.json(postData);
};

export default postFinder;
