const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlenth: 32,
      unique: true,
    },
  },
  // Here we use timestamp coz, we need to store the exact time into our database.
  { timestamp: true }
);

module.exports = mongoose.model('Category', categorySchema);
