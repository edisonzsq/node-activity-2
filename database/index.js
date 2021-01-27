const { Sequelize, DataTypes } = require("sequelize");

// Configure Database
const sequelize = new Sequelize("sqlite::memory:");

// Create ORM Objects
const Garage = sequelize.define("Garage", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Car = sequelize.define("Car", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync ORM entities with database tables
const init = async () => {
  await sequelize.sync({ force: true });
  return new Promise((resolve) => {
    const models = {
      Garage: Garage,
      Car: Car,
    };
    resolve(models);
  });
};

module.exports = {
  init: init,
};
