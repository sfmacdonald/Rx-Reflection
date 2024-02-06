const router = require('express').Router();
const { Medication } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const medicationData = await Medication.create({
            name: req.body.name,
            dosage: req.body.dosage,
            dayOfWeek: req.body.dayOfWeek,
            inUse: req.body.inUse,
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



