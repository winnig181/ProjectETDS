'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Item, Deal, UserReview}) {
      User.hasMany(Item, { foreignKey: 'userId' });
      User.hasMany(Deal, { foreignKey: 'owner', as: 'ownedDeals' });
      User.hasMany(Deal, { foreignKey: 'tenant', as: 'rentedDeals' });
      User.hasMany(UserReview, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    nickName: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    publicPhone: DataTypes.TEXT,
    avatar: DataTypes.TEXT,
    about: DataTypes.TEXT,
    city: DataTypes.TEXT,
    metro: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
