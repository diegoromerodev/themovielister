import { NextApiRequest, NextApiResponse } from "next";
import tokenMiddleware from "../../../../../lib/tokenMiddleware";
import {
  CommentSchema,
  PostSchema,
  UserSchema,
} from "../../../../../lib/types";
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

const createPostComment = async (
  postId: number,
  user: UserSchema,
  body: string
) => {
  const post: PostSchema = await Post.findByPk(postId);
  if (!post || !body || !user) return false;
  const addedComment: CommentSchema = await Comment.create({
    body,
    UserId: user.id,
    PostId: post.id,
  });
  const populatedComment: CommentSchema = await Comment.findByPk(
    addedComment.id,
    {
      include: [User, Post],
    }
  );
  return populatedComment;
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
      commentData = await createPostComment(postId, user, body);
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
