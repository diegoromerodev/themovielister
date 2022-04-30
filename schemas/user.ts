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
      validate: {
        max: 20,
        min: 3,
      },
    },
    avatarURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 20,
        max: 100,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
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
