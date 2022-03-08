import bcrypt from "bcryptjs";
import LocalStrategy from "passport-local";
import User from "../schemas/user";

const localPassport = new LocalStrategy(async (username, password, done) => {
  const user = await User.findOne({ where: { username } });
  if (user) {
    const compare = await bcrypt.compare(password, user.password);
    if (compare) return done(null, user);
  }
  return done(new Error("Authentication failed"));
});

export default localPassport;
