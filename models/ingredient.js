var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    name          : String,
    date          : Date,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Ingredient', ingredientSchema );
