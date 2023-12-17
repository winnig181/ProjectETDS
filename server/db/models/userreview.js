const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Userreview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Userreview.belongsTo(User, { foreignKey: "targetId" });
    }
  }
  Userreview.init(
    {
      userId: DataTypes.INTEGER,
      review: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
      targetId: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Userreview",
    }
  );
  return Userreview;
};
