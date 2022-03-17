import { NextApiRequest, NextApiResponse } from "next";
import tokenMiddleware from "../../../../../lib/tokenMiddleware";
import Comment from "../../../../../schemas/comment";
import Post from "../../../../../schemas/post";
import User from "../../../../../schemas/user";

const getPostComments = async (postId: number) => {
  const comments = Comment.findAll({
    where: {
      PostId: postId,
    },
    include: [Post, User],
  });
  return comments;
};

const createPostComment = async ({ body, postId, user }) => {
  const post = await Post.findByPk(postId);
  if (!post || !user) return false;
  const comment = await Comment.create(
    {
      body,
      PostId: postId,
      UserId: user.id,
    },
    {
      include: [Post, User],
    }
  );
  return comment;
};

const postCommentsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const postId = Number(req.query.postId);
  const { body } = req.body;
  let user;
  try {
    user = await tokenMiddleware(req);
  } catch (err) {
    user = false;
  }
  let commentData;
  switch (req.method) {
    case "POST":
      commentData = await createPostComment({ body, user, postId });
      break;
    default:
      commentData = await getPostComments(postId);
  }
  if (!commentData) {
    return res.status(400).json("INVALID REQUEST");
  }
  return res.json(commentData);
};

export default postCommentsHandler;
