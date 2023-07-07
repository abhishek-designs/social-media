'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FriendshipStatuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusName: {
        type: Sequelize.STRING
      },
      statusId: {
        type: Sequelize.INTEGER
      },
      isFriend: {
        type: Sequelize.BOOLEAN
      },
      status: {
        type: Sequelize.ENUM('Accepted', 'Rejected')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FriendshipStatuses');
  }
};