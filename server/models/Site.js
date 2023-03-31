const { Schema, model } = require("mongoose");

const siteSchema = new Schema({
  name: {
    type: String,
  },
  elements: {
    type: Array,
  }

});

const Site = model("Site", siteSchema);

module.exports = Site;
