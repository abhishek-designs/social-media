"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "john doe",
          email: "jdoe@gmail.com",
          isMember: false,
          password: "sdfdsfsdfsdfdsf-123123safsad-sad",
        },
        {
          username: "tony stark",
          email: "tony@gmail.com",
          isMember: true,
          password: "sdfdsfsdfsdfdsf-123123safsad-sad",
        },
        {
          username: "sam williams",
          email: "sam@gmail.com",
          isMember: false,
          password: "sdfdsfsdfsdfdsf-123123safsad-sad",
        },
        {
          username: "richard stone",
          email: "richard@gmail.com",
          isMember: true,
          password: "sdfdsfsdfsdfdsf-123123safsad-sad",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
