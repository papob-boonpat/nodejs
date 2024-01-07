const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("node-complete", "root", "Strong_2540", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
