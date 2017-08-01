var mongoose = require("mongoose");
var Ingredient = require('../models/ingredient');
//var ingredient = mongoose.model("ingredient"); <- error
var ingredientController = {};


ingredientController.list = function(req, res) {
  Ingredient.find({}).exec(function (err, ingredients) {
    if (err) {
      console.log('Error:', err);
    }
    else {
      res.render('../views/ingredients/index', {ingredients: ingredients});
    }
  });
}

ingredientController.save = function(req, res) {
  var ingredient = new Ingredient(req.body);

  ingredient.save(function(err) {
    if (err) {
      console.log(err),
      res.render("../views/ingredients/create");
    } else {
      console.log('Successfully created a ingredient');
      res.redirect("/ingredients");
    }
  });
}

ingredientController.show = function(req, res) {
  Ingredient.findOne({_id: req.params.id}).exec(function (err, ingredient) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/ingredients/show", {ingredient: ingredient});
    }
  });
};


ingredientController.create = function(req, res){
  res.render('../views/ingredients/create');
}


module.exports = ingredientController;
