const Vocabulary = require('../models/Vocabulary');

module.exports = {
  async index(req, res) {
    const vocabulary = await Vocabulary.find();

    return res.json(vocabulary);
  },

  async store(req, res) {
    const { words } = req.body;

    const vocabulary = await Vocabulary.create({
      words,
    });

    return res.json(vocabulary);
  },
};
