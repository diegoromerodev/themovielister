import { NextApiRequest, NextApiResponse } from "next";
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

const commentsFinder = async (req: NextApiRequest, res: NextApiResponse) => {
  const { postId, commentId } = req.query;
  const comment = await getComment(postId, commentId);
  return comment;
};

export default commentsFinder;
