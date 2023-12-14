'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Item, Category}) {
      SubCategory.belongsTo(Category, { foreignKey: 'categoryId' })
      SubCategory.hasMany(Item, { foreignKey: 'subCategoryId' })
    }
  }
  SubCategory.init({
    categoryId: DataTypes.INTEGER,
    subCategoryName: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};
