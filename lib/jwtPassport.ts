import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import User from "../schemas/user";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKENSECRET,
};

const jwtPassport = new Strategy(options, async (payload, done) => {
  try {
    const user = await User.findByPk(payload.user.id);
    if (user) return done(null, payload.user);
    return done(null, false);
  } catch (err) {
    return done(new Error("Invalid data"));
  }
});

export default jwtPassport;
