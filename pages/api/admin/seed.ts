import { NextApiRequest, NextApiResponse } from "next";
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
    const userInstance = await User.create({ ...user });
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
  switch (req.method) {
    case "POST":
      await executeSeed();
      break;
    default:
      return res.status(400).json("NO SUCH ENDPOINT");
  }
  return res.json("SUCCESS");
};
export default seedHandler;
