'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      nickName: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.TEXT
      },
      publicPhone: {
        type: Sequelize.TEXT
      },
      avatar: {
        type: Sequelize.TEXT
      },
      about: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.TEXT
      },
      metro: {
        type: Sequelize.TEXT
      },
      isActivated:{
        type: Sequelize.BOOLEAN
      },
      activationLink: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Users');
  }
};
