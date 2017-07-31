var express = require('express');
var router = express.Router();
var recette = require('../controllers/recetteController');

/* GET recettes listing. */
router.get('/', recette.list);

// Create recette
router.get('/create', recette.create);

// Save recette
router.post('/save', recette.save);

module.exports = router;
