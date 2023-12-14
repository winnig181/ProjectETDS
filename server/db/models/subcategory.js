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
    videogames: DataTypes.TEXT,
    books: DataTypes.TEXT,
    music: DataTypes.TEXT,
    boardgames: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};
