const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  user_id: String,
  name: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },

  quan: {
    type: String,
    required: true
  },

  rate: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  },
  kharcha: {
    type: String
  },
  advanced: {
    type: String
  },

  p: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model("postss", postSchema);
