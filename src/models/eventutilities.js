'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventUtilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EventUtilities.init({
    eventId: DataTypes.INTEGER,
    utilityName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EventUtilities',
  });
  return EventUtilities;
};