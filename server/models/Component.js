const { Schema, model } = require("mongoose");

const componentSchema = new Schema({
  tag: {
    type: String,
  },
  file: {
    type: String,
  },style:{
    type:String
  },cssType:{
    type:String
  },
  css:{
    type:String
  }

});

const Component = model("Component", componentSchema);

module.exports = Component;
