const express = require('express');

const app = express();

trainers = {
  Tom: {
    pokemon : ['pikachu', 'squritle']
  },
  Sam: {
    pokemon : ['charmander', 'gengar']
  }
}

module.exports = app => {
  app.get('/trainer-api', (req, res) => {
    res.json(trainers)
  });

  app.get('/trainer-api/:trainerName', (req, res) => {
    res.json(trainers[req.params.trainerName])
  });
}