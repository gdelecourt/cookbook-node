var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    name            : String,
    category        : String,
    subcategory     : String,
    unite           : String,
    conditionement  : Number, // multiple de l'unité
    prix_unitaire   : Number,
    updated         :{ type: Date, default: Date.now },
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Ingredient', ingredientSchema );
