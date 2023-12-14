/* eslint-disable no-unused-vars */
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {}
  }
  Note.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.TEXT,
      img: DataTypes.TEXT,
      isFav: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Note",
    }
  );
  return Note;
};
