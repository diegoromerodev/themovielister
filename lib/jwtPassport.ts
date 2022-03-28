import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import User from "../schemas/user";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKENSECRET,
};

const jwtPassport = new Strategy(options, async (payload, done) => {
  try {
    const user = await User.findOne({
      where: {
        id: payload.user.id,
        email: payload.user.email,
        createdAt: payload.user.createdAt,
      },
    });
    if (user) return done(null, user);
    return done(null, false);
  } catch (err) {
    return done(new Error("Invalid data"));
  }
});

export default jwtPassport;
