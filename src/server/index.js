require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

mongoose.connect(process.env.BD_URL_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
