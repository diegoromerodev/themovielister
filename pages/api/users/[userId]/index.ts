import { NextApiRequest, NextApiResponse } from "next";
import tokenMiddleware from "../../../../lib/tokenMiddleware";
import { PostSchema, UserSchema } from "../../../../lib/types";
import Movie from "../../../../schemas/movie";
import Post from "../../../../schemas/post";
import User from "../../../../schemas/user";

const getUser = async (userId: number) => {
  const user: UserSchema = await User.findByPk(userId);
  const postsByUser: PostSchema[] = await Post.findAll({
    where: {
      UserId: user.id,
    },
    include: [Movie, User],
  });
  user.setDataValue("Posts", postsByUser);
  return user;
};

const deleteUser = async (userId: number, currentUserId: number) => {
  const userToDelete: UserSchema = await getUser(userId);
  if (!userToDelete && userToDelete.id !== currentUserId) {
    return false;
  }
  await userToDelete.destroy();
  return false;
};

const updateUser = async (
  userId: number,
  currentUserId: number,
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const userToUpdate: UserSchema = await getUser(userId);
  if (!userToUpdate && userToUpdate.id !== currentUserId) {
    return false;
  }
  if (username) userToUpdate.username = username;
  if (firstName) userToUpdate.firstName = firstName;
  if (lastName) userToUpdate.lastName = lastName;
  if (email) userToUpdate.email = email;
  if (password) userToUpdate.password = password;
  const result = userToUpdate.save();
  return result;
};

const userSetter = async (req: NextApiRequest, res: NextApiResponse) => {
  let userData;
  const { userId } = req.query;
  const userNumberId = Number(userId);
  const { firstName, lastName, email, password, username } = req.body;
  let user;
  try {
    user = await tokenMiddleware(req);
  } catch (err) {
    user = false;
  }
  switch (req.method) {
    case "GET":
      userData = await getUser(userNumberId);
      break;
    case "PUT":
      userData = await updateUser(
        userNumberId,
        user.id,
        username,
        firstName,
        lastName,
        email,
        password
      );
      break;
    case "DELETE":
      userData = await deleteUser(userNumberId, user.id);
      break;
    default:
      return res.status(400).json({ error: "No such endpoint." });
  }
  if (!userData) {
    return res.status(404).json({ error: "User not found." });
  }
  return res.json(userData);
};

export default userSetter;
