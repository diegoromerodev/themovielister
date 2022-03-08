import bcrypt from "bcryptjs";
import LocalStrategy from "passport-local";
import jwt from "jsonwebtoken";
import User from "../schemas/user";

const localPassport = new LocalStrategy(async (username, password, done) => {
  const user = await User.findOne({ where: { username } });
  if (user) {
    const compare = await bcrypt.compare(password, user.password);
    if (compare) {
      const token = jwt.sign(
        { user: user.dataValues },
        process.env.TOKENSECRET
      );
      return done(null, token);
    }
  }
  return done(new Error("Authentication failed"));
});

export default localPassport;
