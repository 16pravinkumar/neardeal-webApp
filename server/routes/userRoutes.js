const express = require('express');

const router = express.Router();

const { submitForm } = require('../controllers/userControllers');

router.post('/signup', submitForm);

module.exports = router;