import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import User from "../../../schemas/user";

const usersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(400).json("NO SUCH ENDPOINT");
  const { username, email, firstName, lastName, password } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 5);
    const user = await User.create({
      username,
      email,
      firstName,
      lastName,
      password: hashedPass,
    });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ errors: err });
  }
};

export default usersHandler;
