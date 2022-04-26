import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { Model } from "sequelize/types";
import tokenMiddleware from "../../../lib/tokenMiddleware";
import Category from "../../../schemas/category";
import seedCategoryData from "../../../schemas/data/categories";
import seedPostData from "../../../schemas/data/posts";
import seedUsersArray from "../../../schemas/data/users";
import Post from "../../../schemas/post";
import User from "../../../schemas/user";
import { addMovie } from "../movies";
import { PostSchema } from "../../../lib/types";

const populateUsers = async (usersArr: Model[]) => {
  return new Promise((resolve, reject) => {
    seedUsersArray.forEach(async (user, ind) => {
      try {
        const password = await bcrypt.hash(user.password, 5);
        const userInstance = await User.create({ ...user, password });
        usersArr.push(userInstance);
        if (ind === seedUsersArray.length - 1) {
          resolve(usersArr);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
};

const populateCategories = async (categoriesArray: Model[]) => {
  return new Promise((resolve, reject) => {
    seedCategoryData.forEach(async (cat) => {
      try {
        const category = await Category.create({ ...cat });
        categoriesArray.push(category);
      } catch (e) {
        reject(e);
      }
    });
    resolve(categoriesArray);
  });
};

const executeSeed = async () => {
  const users = [];
  const categories = [];
  await populateCategories(categories);
  await populateUsers(users);
  seedPostData.forEach(async (post) => {
    const postData: PostSchema = await Post.create({ ...post });
    const user = users[Math.floor(Math.random() * users.length)];
    const movie = await addMovie(post.movie);
    await postData.setUser(user);
    await postData.setCategory(
      categories[Math.floor(Math.random() * categories.length)]
    );
    if (movie) {
      await postData.setMovie(movie);
    }
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
        return res.status(403).json({ error: "Request forbidden." });
      await executeSeed();
      break;
    default:
      return res.status(400).json({ error: "No such endpoint." });
  }
  return res.json({ status: "Successfully seeded." });
};
export default seedHandler;
