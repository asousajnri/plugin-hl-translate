const { Router } = require('express');

const Vocabulary = require('./controllers/Vocabulary');

const routes = Router();

routes.get('/vocabulary', Vocabulary.index);
routes.post('/vocabulary-add', Vocabulary.store);

module.exports = routes;
