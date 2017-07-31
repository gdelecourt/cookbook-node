var mongoose = require("mongoose");
var Recette = require('../models/recette');
//var Recette = mongoose.model("Recette"); <- error
var recetteController = {};


recetteController.list = function(req, res) {
  Recette.find({}).exec(function (err, recettes) {
    if (err) {
      console.log('Error:', err);
    }
    else {
      res.render('../views/recettes/index', {recettes: recettes});
    }
  });
}

recetteController.save = function(req, res) {
  var recette = new Recette(req.body);

  recette.save(function(err) {
    if (err) {
      console.log(err),
      res.render("../views/recettes/create");
    } else {
      console.log('Successfully created a recette');
      res.redirect("/recettes");
    }
  });
}

recetteController.create = function(req, res){
  res.render('../views/recettes/create');
}


module.exports = recetteController;
