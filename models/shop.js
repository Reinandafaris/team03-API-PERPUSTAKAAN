"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shop.hasMany(models.User, {
        foreignKey: {
          name: "shopId",
        },
      });

      Shop.hasMany(models.Product, {
        foreignKey: {
          name: "shopId",
        },
      });
    }
  }
  Shop.init(
    {
      name: DataTypes.STRING,
      city: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["Bandung", "Jakarta", "Surabaya", "Bali"]],
            msg: "Shop does not exist in that city",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Shop",
    }
  );
  return Shop;
};
