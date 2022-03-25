import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import tokenMiddleware from "../../../lib/tokenMiddleware";
import Category from "../../../schemas/category";
import seedCategoryData from "../../../schemas/data/categories";
import seedPostData from "../../../schemas/data/posts";
import seedUsersArray from "../../../schemas/data/users";
import Post from "../../../schemas/post";
import User from "../../../schemas/user";

const executeSeed = async () => {
  const users = [];
  const categories = [];
  seedCategoryData.forEach(async (cat) => {
    const category = await Category.create({ ...cat });
    categories.push(category);
  });
  seedUsersArray.forEach(async (user) => {
    const password = await bcrypt.hash(user.password, 5);
    const userInstance = await User.create({ ...user, password });
    users.push(userInstance);
  });
  seedPostData.forEach(async (post) => {
    const postData = await Post.create({ ...post });
    await postData.setUser(users[Math.floor(Math.random() * users.length)]);
    await postData.setCategory(
      categories[Math.floor(Math.random() * categories.length)]
    );
  });
};

const seedHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let user;
  try {
    user = await tokenMiddleware(req);
  } catch (err) {
    user = false;
  }
  switch (req.method) {
    case "POST":
      if (user.role !== "admin")
        return res.status(403).json("NOT ENOUGH PRIVILEGES");
      await executeSeed();
      break;
    default:
      return res.status(400).json("NO SUCH ENDPOINT");
  }
  return res.json("SUCCESS");
};
export default seedHandler;
