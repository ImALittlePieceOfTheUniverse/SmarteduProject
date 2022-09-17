const express = require('express');
const authController = require('../controllers/authController'); //http://localhost:3000/categories

const router = express.Router();

router.route('/signup').post(authController.createUser);

module.exports = router;
