const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Subcategory, User, Deal }) {
      Item.belongsTo(Subcategory, { foreignKey: "subCategoryId" });
      Item.belongsTo(User, { foreignKey: "userId", as: "ownerDetails" });
      Item.hasMany(Deal, { foreignKey: "itemId" });
    }
  }
  Item.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    img1: DataTypes.TEXT,
    condition: DataTypes.TEXT,
    status: DataTypes.TEXT,
    hidden: DataTypes.BOOLEAN,
    subCategoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  },{
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
