const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
const medicationData = require('./medicationData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(medicationData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
