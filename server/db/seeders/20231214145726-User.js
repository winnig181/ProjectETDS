'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: '1@1',
      password: '1',
      nickName: 'milkman',
      phone: '+1 911 112 6969',
      avatar: 'johndoe.jpeg',
      about: 'driver, bring some milk',
      city: 'San Francisco',
      metro: null,
      publicPhone: '+995 595 *** ***',
      createdAt: new Date(),
      updatedAt: new Date()
    },])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
