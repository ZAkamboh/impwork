const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shafiqSchema = new Schema({
  user_id: String,
  aa: {
    type: String,
    required: true
  },
  taf7: {
    type: String,
    required: true
  },

  quan1: {
    type: String,
    required: true
  },

  total1: {
    type: String,
    required: true
  },
  GT: {
    type: String,
    required: true
  },
  k: {
    type: String
  },
  pree: {
    type: String
  },

  body2: {
    type: String
  },

  taf1: {
    type: String
  },

  quan2: {
    type: String
  },

  total2: {
    type: String
  },

  body3: {
    type: String
  },
  taf2: {
    type: String
  },
  quan3: {
    type: String
  },
  total3: {
    type: String
  },

  body4: {
    type: String
  },

  taf3: {
    type: String
  },
  quan4: {
    type: String
  },
  total4: {
    type: String
  },

  body5: {
    type: String
  },

  taf4: {
    type: String
  },
  quan5: {
    type: String
  },
  total5: {
    type: String
  },

  body6: {
    type: String
  },
  taf5: {
    type: String
  },
  quan6: {
    type: String
  },
  total6: {
    type: String
  },

  body7: {
    type: String
  },
  taf6: {
    type: String
  },
  quan7: {
    type: String
  },
  total7: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model("shafiq", shafiqSchema);
