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
  Item.init(
    {

    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
