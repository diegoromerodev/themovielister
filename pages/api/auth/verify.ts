import { NextApiRequest, NextApiResponse } from "next";
import tokenMiddleware from "../../../lib/tokenMiddleware";

const verifyToken = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.json(false);
  let user;
  try {
    user = await tokenMiddleware(req);
  } catch (error) {
    user = false;
    return res.json({ error });
  }
  return res.json(user);
};

export default verifyToken;
