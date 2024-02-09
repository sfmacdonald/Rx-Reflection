const router = require('express').Router();
const userRoutes = require('./userRoutes');
const medicationRoutes = require('./medicationRoutes');
const patientRoutes = require('./patientRoutes');

router.use('/users', userRoutes);
router.use('/medications', medicationRoutes);
router.use('/patients', patientRoutes);  

module.exports = router;
