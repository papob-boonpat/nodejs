const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const CartItem = sequelize.define("cart-item", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true,
  },
  quantity: Sequelize.INTEGER,
});

module.exports = CartItem;
