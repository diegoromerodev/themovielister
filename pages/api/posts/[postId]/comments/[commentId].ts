import { NextApiRequest, NextApiResponse } from "next";
import { CommentPostQuery, CommentSchema } from "../../../../../lib/types";
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

const deleteComment = async (postId: number, commentId: number) => {
  const commentToDelete = await getComment(postId, commentId);
  if (!commentToDelete) return false;
  await commentToDelete.destroy();
  return true;
};

const updateComment = async (
  postId: number,
  commentId: number,
  body: string
) => {
  const commentToUpdate: CommentSchema = await getComment(postId, commentId);
  if (!commentToUpdate) {
    return false;
  }
  commentToUpdate.body = body;
  const result = await commentToUpdate.save();
  return result;
};

const commentsFinder = async (req: NextApiRequest, res: NextApiResponse) => {
  let { postId, commentId }: CommentPostQuery = req.query;
  const { body } = req.body;
  postId = Number(postId);
  commentId = Number(commentId);
  let comment;
  switch (req.method) {
    case "DELETE":
      comment = await deleteComment(postId, commentId);
      break;
    case "PUT":
      if (body) {
        comment = await updateComment(postId, commentId, String(body));
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
