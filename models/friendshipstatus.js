'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FriendshipStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FriendshipStatus.init({
    statusName: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    isFriend: DataTypes.BOOLEAN,
    status: DataTypes.ENUM('Accepted', 'Rejected')
  }, {
    sequelize,
    modelName: 'FriendshipStatus',
  });
  return FriendshipStatus;
};