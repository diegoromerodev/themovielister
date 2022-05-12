import { customAxios } from "./hooks/useAxiosInterceptor";
import { CommentSchema } from "./types";

export interface CommentCountHash {
  [key: number]: number;
}

export const getCommentCountHash = async (): Promise<CommentCountHash> => {
  const allCommentsRes = await customAxios.get<CommentSchema[]>(
    "/api/comments"
  );
  let commentsPerPostHash = {};
  if (allCommentsRes?.data) {
    commentsPerPostHash = allCommentsRes?.data.reduce((hash, curr) => {
      const newHash = { ...hash };
      if (Object.prototype.hasOwnProperty.call(hash, curr.PostId)) {
        newHash[curr.PostId] += 1;
      } else {
        newHash[curr.PostId] = 1;
      }
      return newHash;
    }, {});
  }
  return commentsPerPostHash;
};
