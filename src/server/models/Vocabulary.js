const mongoose = require('mongoose');

const Vocabulary = mongoose.Schema(
  {
    words: [
      {
        word: String,
        translate: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Vocabulary', Vocabulary);
