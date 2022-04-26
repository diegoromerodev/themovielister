import { NextApiRequest, NextApiResponse } from "next";
import { Model } from "sequelize/types";
import tokenMiddleware from "../../../../lib/tokenMiddleware";
import { PostSchema, UserSchema } from "../../../../lib/types";
import Movie from "../../../../schemas/movie";
import Post from "../../../../schemas/post";
import User from "../../../../schemas/user";

type PostId = string | number | undefined;

interface IdBody {
  postId?: PostId;
}

const getPost = async (postId: number): Promise<Model | null> => {
  try {
    const post = await Post.findByPk(postId, { include: [User, Movie] });
    return post;
  } catch (err) {
    return null;
  }
};

const deletePost = async (postId: number, user: UserSchema) => {
  const postToDelete: PostSchema = await getPost(postId);
  if (postToDelete.UserId !== user.id) {
    return false;
  }
  await postToDelete.destroy();
  return true;
};

const updatePost = async (
  postId: number,
  user: UserSchema,
  title: string,
  body: string
) => {
  const postToUpdate: PostSchema = await getPost(postId);
  if (postToUpdate.UserId !== user.id) {
    return false;
  }
  if (title) {
    postToUpdate.title = title;
  }
  if (body) {
    postToUpdate.body = body;
  }
  const result = await postToUpdate.save();
  return result;
};

const postFinder = async (req: NextApiRequest, res: NextApiResponse) => {
  let { postId }: IdBody = req.query;
  postId = Number(postId);
  const { title, body } = req.body;
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
    case "PUT":
      postData = await updatePost(postId, user, String(title), String(body));
      break;
    case "DELETE":
      if (typeof postId === "number") {
        postData = await deletePost(postId, user);
      }
      break;
    default:
      return res.status(400).json({ error: "No such endpoint." });
  }

  if (!postData)
    return res.status(404).json({ error: "Invalid post request." });

  return res.json(postData);
};

export default postFinder;
