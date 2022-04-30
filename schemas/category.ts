import { DataTypes, Model } from "sequelize";
import pgSequelize from "../lib/sequelize";

class CategoryModel extends Model {
  toJSON() {
    const allAttrs = { ...this.get() };
    if (allAttrs.Posts?.length) {
      allAttrs.Posts.forEach((post) => {
        const postData = { ...post };
        const userData = post.User;
        delete userData.password;
        postData.User = userData;
      });
    }
    return allAttrs;
  }
}

const Category = CategoryModel.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: pgSequelize,
    modelName: "Category",
  }
);

export default Category;
