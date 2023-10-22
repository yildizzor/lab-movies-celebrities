//  Add your code here

// const mongoose = require("mongoose");
// const model = mongoose.model;
// const Schema = mongoose.Schema;

const { Schema, model } = require("mongoose");

const celebritySchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    occupation: String,
    catchPhrase: String,
  },
  { timestamps: true }
);

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
