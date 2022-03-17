import { NextApiRequest, NextApiResponse } from "next";
import tokenMiddleware from "../../../../../lib/tokenMiddleware";
import {
  CommentPostQuery,
  CommentSchema,
  UserSchema,
} from "../../../../../lib/types";
import Comment from "../../../../../schemas/comment";

const getComment = async (postId: number, commentId: number) => {
  const comment = await Comment.findOne({
    where: {
      PostId: postId,
      id: commentId,
    },
  });
  return comment;
};

const deleteComment = async (
  postId: number,
  commentId: number,
  user: UserSchema
) => {
  const commentToDelete: CommentSchema = await getComment(postId, commentId);
  if (!commentToDelete || user.id !== commentToDelete.UserId) return false;
  await commentToDelete.destroy();
  return true;
};

const updateComment = async (
  postId: number,
  commentId: number,
  user: UserSchema,
  body: string
) => {
  const commentToUpdate: CommentSchema = await getComment(postId, commentId);
  if (!commentToUpdate || commentToUpdate.UserId === user.id) {
    return false;
  }
  commentToUpdate.body = body;
  const result = await commentToUpdate.save();
  return result;
};

const commentsFinder = async (req: NextApiRequest, res: NextApiResponse) => {
  let { postId, commentId }: CommentPostQuery = req.query;
  const { body } = req.body;
  let user;
  if (req.method !== "GET") {
    try {
      user = await tokenMiddleware(req);
    } catch (err) {
      user = false;
    }
  }
  postId = Number(postId);
  commentId = Number(commentId);
  let comment;
  switch (req.method) {
    case "DELETE":
      comment = await deleteComment(postId, commentId, user);
      break;
    case "PUT":
      if (body) {
        comment = await updateComment(postId, commentId, user, String(body));
      }
      break;
    default:
      if (typeof commentId === "number" && typeof postId === "number") {
        comment = await getComment(postId, commentId);
      }
  }
  if (!comment) {
    return res.status(404).json("COMMENT NOT FOUND");
  }
  return res.json(comment);
};

export default commentsFinder;
