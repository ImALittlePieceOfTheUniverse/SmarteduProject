const express = require('express');
const categoryController = require('../controllers/categoryController'); //http://localhost:3000/categories

const router = express.Router();

router.route('/').post(categoryController.createCategory);

module.exports = router;
