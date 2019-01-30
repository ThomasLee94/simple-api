const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const trainers = {
  1: {
    name: 'Tom',
    pokemon : ['pikachu', 'squritle']
  },
  2: {
    name: 'Sam',
    pokemon : ['charmander', 'gengar']
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}));

app.get('/trainer-api', (req, res) => {
  res.json(trainers)
});

app.get('/trainer-api/:arrayNum', (req, res) => {
  res.json(trainers[req.params.arrayNum])
});

const port = process.env.PORT || 3000;
app.listen(port)