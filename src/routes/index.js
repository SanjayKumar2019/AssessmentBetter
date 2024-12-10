const express = require('express');
const router = express.Router();
const { welcome } = require('../controllers/homeController');

router.get('/', welcome);

module.exports = router;
