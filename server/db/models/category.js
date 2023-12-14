'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({SubCategory}) {
      Category.hasMany(SubCategory, { foreignKey: 'categoryId' })
    }
  }
  Category.init({
    tourism: DataTypes.TEXT,
    homeFuns: DataTypes.TEXT,
    tools: DataTypes.TEXT,
    devices: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
