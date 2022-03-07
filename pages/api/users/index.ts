import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../schemas/user";

const usersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, email, firstName, lastName, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      firstName,
      lastName,
      password,
    });
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errors: err });
  }
};

export default usersHandler;
