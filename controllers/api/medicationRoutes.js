const router = require('express').Router();
const { Medication } = require('../../models');

router.get('/add-medication', (req, res) => {
    res.render('managemeds', {
        logged_in: true,
    });
})
router.get('/view-medications', async (req, res) => {
    try {
        // Retrieve user_id from session
        const userId = req.session.user_id;

        console.log(userId);

        // Find medications associated with the user_id
        const medications = await Medication.findAll({
            where: {
                user_id: userId
            }
        });

        console.log(medications);

        // Render medicationList view and pass medications data to the template
        res.render('medicationList', {
            medications,  // Pass medications array directly
            logged_in: true
        });
    } catch (error) {
        console.error('Error retrieving user medications:', error);
        // Render an error page or handle the error in some way
        res.status(500).send('Internal server error');
    }
});

router.post('/add-medication', async (req, res) => {
    try {
        const userId = req.session.user_id;

        const medicationData = await Medication.create({
            medicationName: req.body.medicationName,
            strength: req.body.strength,
            dosage: req.body.dosage,
            frequency: req.body.frequency,
            route: req.body.route,
            duration: req.body.duration,
            user_id: userId, // Use req.session.user_id to populate the user_id field
        });

        res.status(200).json(medicationData);
    } catch (err) {
        res.status(400).json(err);
    }
});



router.put('/:id', async (req, res) => {
    try {
        const medication = await Medication.update(
            {
                medicationName: req.body.medicationName,
                strength: req.body.strength,
                dosage: req.body.dosage,
                frequency: req.body.frequency,
                route: req.body.route,
                duration: req.body.duration,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(medication);
    } catch (err) {
        res.status(500).json(err);
    }
});



router.get('/', async (req, res) => {
    try {
        const dbMedicationData = await Medication.findAll({
            include: [
                {
                    model: User,
                    attributes: ['firstName', 'lastName'],
                },
            ],
            attributes: ['medicationName', 'dosage'],
        });

        const medications = dbMedicationData.map((medication) =>
            medication.get({ plain: true })
        );

        res.render('managemeds', {
            medications,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/medication/:id', async (req, res) => {
    try {
        const dbMedicationData = await Medication.findByPk(req.params.id, {
            include: [
                {
                    model: Medication,
                    attributes: [
                        'medicationName',
                        'strength',
                        'dosage',
                        'frequency',
                        'route',
                        'duration',
                    ],
                },
            ],
        });

        const medication = dbMedicationData.get({ plain: true });
        res.render('medication', { medication });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const medication = await Medication.destroy(
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(medication);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


