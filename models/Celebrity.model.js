//  Add your code here

// const mongoose = require("mongoose");
// const model = mongoose.model;
// const Schema = mongoose.Schema;

const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
