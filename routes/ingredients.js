var express = require('express');
var router = express.Router();
var ingredient = require('../controllers/ingredientController');

/* GET ingredients listing. */
router.get('/', ingredient.list);

// Create ingredient
router.get('/create', ingredient.create);

// Save ingredient
router.post('/save', ingredient.save);

// Show ingredient
router.get('/show/:id', ingredient.show);

module.exports = router;
