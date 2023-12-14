'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Item}) {
      Deal.belongsTo(Item, { foreignKey: 'itemId' });
      Deal.belongsTo(User, { foreignKey: 'owner', as: 'ownerDetails' });
      Deal.belongsTo(User, { foreignKey: 'tenant', as: 'tenantDetails' });
    }
  }
  Deal.init({
    owner: DataTypes.INTEGER,
    tenant: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    ownerApproveDeal: DataTypes.BOOLEAN,
    ownerCloseDeal: DataTypes.BOOLEAN,
    tenantApproveDeal: DataTypes.BOOLEAN,
    tenantCloseDeal: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Deal',
  });
  return Deal;
};
