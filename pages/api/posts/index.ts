import { NextApiRequest, NextApiResponse } from "next";
import { Model } from "sequelize/types";
import tokenMiddleware from "../../../lib/tokenMiddleware";
import { PostSchema } from "../../../lib/types";
import Category from "../../../schemas/category";
import Movie from "../../../schemas/movie";
import Post from "../../../schemas/post";
import { addMovie } from "../movies";

const newPost = async ({ title, body, movie, category }, user) => {
  if (!user) return false;
  let movieModel: boolean | Model;
  const categoryModel = await Category.findByPk(category);
  movieModel = await Movie.findByPk(movie);
  if (!movieModel) {
    movieModel = await addMovie(movie);
  }
  if (!movieModel || !categoryModel) return false;
  const post: PostSchema = await Post.create({
    title,
    body,
  });
  await post.setUser(user);
  await post.setCategory(categoryModel);
  await post.setMovie(movieModel);
  return post;
};

const postsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let user;
  try {
    user = await tokenMiddleware(req);
  } catch (err) {
    user = false;
  }
  let postData;
  try {
    switch (req.method) {
      case "POST":
        if (!user) return res.status(401).json("UNAUTHORIZED");
        postData = await newPost(req.body, user);
        break;
      default:
        postData = await Post.findAll();
        break;
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: err });
  }
  return res.json(postData);
};

export default postsHandler;
