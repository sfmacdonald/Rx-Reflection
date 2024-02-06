const router = require('express').Router();
const { Medication } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const medicationData = await Medication.create({
            name: req.body.name,
            dosage: req.body.dosage,
            dayOfWeek: req.body.dayOfWeek,
            inUse: req.body.inUse,
            //createdAt: req.body.createdAt,
            //  updatedAt: req.body.updatedAt,
            userId: req.body.userId,
        });
        res.status(200).json(medicationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

router.put('/:id', async (req,res) => {
    try {
        const medication = await Medication.update(
            {
                name: req.body.name,
                dosage: req.body.dosage,
                dayOfWeek: req.body.dayOfWeek,
                inUse: req.body.inUse,  
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(medication);
    }   catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

router.get('/', async (req, res) => {
    try {
        const dbMedicationData = await Medication.findAll({
            include: [
                {
                    model: Medication,
                    attributes: ['name', 'dosage'],
                },
            ],
        });

        const medications = dbMedicationData.map((medication) =>
            gallery.get({ plain: true })
        );

        // res.render('medicationpage', {
        //     medications,
        // });
    }   catch (err) {
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
                        'id',
                        'name',
                        'dosage',
                        'dayOfWeek',
                        'inUse',
                    ],
                },
            ],
        });

        const medication = dbMedicationData.get({ plain: true });
        res.render('medication', { medication });     
    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




