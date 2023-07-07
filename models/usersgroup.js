"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UsersGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsersGroup.belongsToMany(models.User, {
        through: models.MemberGroups,
      });
    }
  }
  UsersGroup.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      admin_id: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "UsersGroup",
    }
  );
  return UsersGroup;
};
