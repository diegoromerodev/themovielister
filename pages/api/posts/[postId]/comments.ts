import { NextApiRequest, NextApiResponse } from "next";
import Comment from "../../../../schemas/comment";

const postCommentsHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { postId } = req.query;
  const comments = Comment.findAll({
    where: {
      PostId: postId,
    },
  });
  return res.json(comments);
};

export default postCommentsHandler;
