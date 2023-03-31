const { Schema, model } = require("mongoose");

const elementSchema = new Schema({
  tag: {
    type: String,
  },
  attributes: {
    type: String,
  },
  parentTag: {
    type: Schema.Types.ObjectId,
    ref: "Element",
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Element",
    },
  ],
  site: { type: Boolean },
});

const Element = model("Element", elementSchema);

module.exports = Element;
