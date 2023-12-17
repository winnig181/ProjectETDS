const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Item, Deal, Userreview }) {
      User.hasMany(Item, { foreignKey: "userId" });
      User.hasMany(Deal, { foreignKey: "ownerId", as: "ownedDeals" });
      // User.hasMany(Deal, { foreignKey: "tenantId", as: "rentedDeals" });
      User.hasMany(Userreview, { foreignKey: "targetId" });
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
      email: DataTypes.TEXT,
      hashpass: DataTypes.TEXT,
      nickName: DataTypes.TEXT,
      phone: DataTypes.TEXT,
      publicPhone: DataTypes.TEXT,
      avatar: DataTypes.TEXT,
      about: DataTypes.TEXT,
      city: DataTypes.TEXT,
      metro: DataTypes.TEXT,
      isActivated: DataTypes.BOOLEAN,
      activationLink: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
