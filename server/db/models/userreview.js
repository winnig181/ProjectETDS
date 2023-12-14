'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      UserReview.belongsTo(User, { foreignKey: 'userId', as: 'reviewerDetails' });
    }
  }
  UserReview.init({
    userId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    targetId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'UserReview',
  });
  return UserReview;
};
