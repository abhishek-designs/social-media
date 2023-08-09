"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasMany(models.Friendship, {
      //   foreignKey: "userId",
      //   onDelete: "CASCADE",
      // });
      User.hasMany(models.Group, {
        foreignKey: "adminId",
        as: "admin",
        onDelete: "CASCADE",
      });
      User.belongsToMany(models.Group, {
        through: models.GroupUsers,
        as: "groups",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      profile_pic: DataTypes.STRING,
      isMember: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
