import { NextApiRequest } from "next";
import passport from "passport";
import jwtPassport from "./jwtPassport";

passport.use(jwtPassport);

const tokenMiddleware = (req: NextApiRequest) => {
  return new Promise((resolve, reject) => {
    passport.authenticate("jwt", (err, user) => {
      if (user) return resolve(user);
      return reject(err);
    })(req);
  });
};

export default tokenMiddleware;
