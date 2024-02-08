const sequelize = require('../config/connection');
const { User, Medication, Patient } = require('../models');

const userData = require('./userData.json');
const medicationData = require('./medicationData.json');
const patientData = require('./patientData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Medication.bulkCreate(medicationData, {
    returning: true,
  });

  await Patient.bulkCreate(patientData, {
    returning: true,
  })

  process.exit(0);
};

seedDatabase();
