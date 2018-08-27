const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const talhaSchema = new Schema({
  user_id: String,
  a: {
    type: String
  },
  b: {
    type: String
  },

  c: {
    type: String
  },

  d: {
    type: String
  },
  e: {
    type: String
  },
  f: {
    type: String
  },
  g: {
    type: String
  },

  h: {
    type: String
  },

  i: {
    type: String
  },
  j: {
    type: String
  },
  k: {
    type: String
  },
  l: {
    type: String
  },
  m: {
    type: String
  },
  n: {
    type: String
  },
  o: {
    type: String
  },
  p: {
    type: String
  },
  q: {
    type: String
  },
  r: {
    type: String
  },
  ppp: {
    type: String
  },
  htp: {
    type: String
  },

  http: {
    type: String
  },
  v: {
    type: String
  },
  w: {
    type: String
  },
  x: {
    type: String
  },

  y: {
    type: String
  },
  z: {
    type: String
  },
  aa: {
    type: String
  },

  bb: {
    type: String
  },
  cc: {
    type: String
  },

  dd: {
    type: String
  }
});
module.exports = mongoose.model("talha", talhaSchema);
