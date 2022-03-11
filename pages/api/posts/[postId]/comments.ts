import { NextApiRequest, NextApiResponse } from "next";
import Comment from "../../../../schemas/comment";

const getPostComments = async (postId: number) => {
  const comments = Comment.findAll({
    where: {
      PostId: postId,
    },
  });
  return comments;
};

const createPostComment = () => {};

const postCommentsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const postId = Number(req.query.postId);
  let commentData;
  switch (req.method) {
    default:
      commentData = await getPostComments(postId);
  }
  return res.json(commentData);
};

export default postCommentsHandler;
