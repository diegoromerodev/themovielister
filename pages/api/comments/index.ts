import { NextApiRequest, NextApiResponse } from "next";
import Comment from "../../../schemas/comment";

const commentsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const comments = await Comment.findAll();
  return res.json(comments);
};

export default commentsHandler;
