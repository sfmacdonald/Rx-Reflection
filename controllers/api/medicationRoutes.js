const router = require('express').Router();
const { Medication } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const medicationData = await Medication.create({
            medicationName: req.body.medicationName,
            strength: req.body.strength,
            dosage: req.body.dosage,
            frequency: req.body.frequency,
            route: req.body.route,
            duration: req.body.duration,
            userId: req.body.userId,
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
                    model: Medication,
                    attributes: ['medicationName', 'dosage'],
                },
            ],
        });

        const medications = dbMedicationData.map((medication) =>
            medication.get({ plain: true })
        );

        // res.render('medicationpage', {
        //     medications,
        // });
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


