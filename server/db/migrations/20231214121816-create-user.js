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
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      hashpass: {
        type: Sequelize.TEXT, 
        allowNull: false,
      },
      nickName: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.STRING
      },
      publicPhone: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.TEXT
      },
      about: {
        type: Sequelize.TEXT,
      },
      city: {
        type: Sequelize.STRING,
      },
      metro: {
        type: Sequelize.TEXT,
      },
      isActivated:{
        type: Sequelize.BOOLEAN,
      },
      activationLink: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
