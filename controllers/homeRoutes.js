const router = require('express').Router();
const { User } = require('../models');
const { Patient } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    res.render('login', {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/home', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { id: req.session.user_id } });

    const logged_in = req.session.logged_in || false;


    res.render('homepage', { userData, logged_in });
  } catch (err) {
    res.status(400).json(err);
  }




})

module.exports = router;
