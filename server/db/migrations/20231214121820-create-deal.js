'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Deals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      owner: {
        type: Sequelize.INTEGER
      },
      tenant: {
        type: Sequelize.INTEGER
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Items',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      ownerApproveDeal: {
        type: Sequelize.BOOLEAN
      },
      ownerCloseDeal: {
        type: Sequelize.BOOLEAN
      },
      tenantApproveDeal: {
        type: Sequelize.BOOLEAN
      },
      tenantCloseDeal: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Deals');
  }
};
