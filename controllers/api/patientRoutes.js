const router = require('express').Router();
const { Patient } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const patientData = await Patient.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            date_of_birth: req.body.date_of_birth,
            gender: req.body.gender,
            height: req.body.height,
            weight: req.body.weight,
            email: req.body.email,
            street: req.body.street,
            apt_unit_number: req.body.apt_unit_number,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            phone_1: req.body.phone_1,
            phone_2: req.body.phone_2,
            userId: req.body.userId,
        });
        res.status(200).json(patientData);
    }   catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

router.put('/:id', async (req,res) => {
    try {
        const patient = await Patient.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                date_of_birth: req.body.date_of_birth,
                gender: req.body.gender,
                height: req.body.height,
                weight: req.body.weight,
                email: req.body.email,
                street: req.body.street,
                apt_unit_number: req.body.apt_unit_number,
                city: req.body.city,
                state: req.body.state,
                zip_code: req.body.zip_code,
                phone_1: req.body.phone_1,
                phone_2: req.body.phone_2,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(patient);
    }   catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

router.get('/patient/:id', async (req, res) => {
    try {
        const dbPatientData = await Patient.findByPk(req.params.id, {
            include: [
                {
                    model: Patient,
                    attributes: [
                        'id',
                        'first_name',
                        'last_name',
                        'date_of_birth',
                        'gender',
                        'height',
                        'weight',
                        'email',
                        'street',
                        'apt_unit_number',
                        'city',
                        'state',
                        'zip_code',
                        'phone_1',
                        'phone_2',
                        'userId',

                    ],
                },
            ],
        });

        const patient = dbPatientData.get({ plain: true });
        res.render('patient', { patient });
    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;


