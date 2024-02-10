const router = require('express').Router();
const { User } = require('../models');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
    try {
        res.render('login', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/dashboard', async (req, res) => {
    try {
        const logged_in = req.session.logged_in;
        const firstName = req.session.firstName;
        console.log(logged_in);
        console.log(firstName);
        res.render('dashboard', {
            logged_in,
            firstName
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
