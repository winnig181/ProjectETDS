'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Item, Category}) {
      Subcategory.belongsTo(Category, { foreignKey: 'categoryId' })
      Subcategory.hasMany(Item, { foreignKey: 'subCategoryId' })
    }
  }
  Subcategory.init({
    categoryId: DataTypes.INTEGER,
    categoryIMG: DataTypes.TEXT,
    subCategoryName: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  return Subcategory;
};
