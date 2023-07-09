"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.belongsTo(models.User, {
        foreignKey: "adminId",
        as: "admin",
        onDelete: "CASCADE",
      });
      Group.belongsToMany(models.User, {
        through: models.GroupUsers,
        as: "users",
      });
    }
  }
  Group.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      adminId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Group",
    }
  );
  return Group;
};