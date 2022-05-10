import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import User from "../../../schemas/user";

const usersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!["POST", "GET"].includes(req.method))
    return res.status(400).json({ error: "No such endpoint." });
  if (req.method === "GET") {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  }
  const { username, bio, avatarURL, email, firstName, lastName, password } =
    req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 5);
    const user = await User.create({
      username,
      bio,
      avatarURL,
      email,
      firstName,
      lastName,
      password: hashedPass,
    });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: "User creation failed." });
  }
};

export default usersHandler;
