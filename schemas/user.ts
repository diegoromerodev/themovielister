import { DataTypes, Model } from "sequelize";
import pgSequelize from "../lib/sequelize";

class UserModel extends Model {
  toJSON() {
    const allAttrs = { ...this.get() };
    delete allAttrs.password;
    return allAttrs;
  }
}

const User = UserModel.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    avatarURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "member",
    },
  },
  {
    sequelize: pgSequelize,
    modelName: "User",
  }
);

export default User;
