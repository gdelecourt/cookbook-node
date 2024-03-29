var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var recetteSchema = new Schema({
    name          : String,
    photo         : String,
    parts         : Number, // nb de personne
    date          : Date,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Recette', recetteSchema );
