import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import passport from "passport";
import localPassport from "../../../lib/localPassport";

passport.use(localPassport);

const authHandler = nextConnect().post(
  (req: NextApiRequest, res: NextApiResponse) => {
    passport.authenticate("local", (error, data) => {
      console.log(error);
      if (error) return res.status(403).json({ error });
      return res.json(data);
    })(req, res);
  }
);

export default authHandler;
