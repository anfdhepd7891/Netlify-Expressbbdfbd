'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// Link to views folder.
let views = path.join(__dirname, '../');

// Home route.
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: views });
});

// Other routes.
router.get('/page1', function(req, res){
  res.sendFile('page1.html', { root: views });
});


app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda (express/server.js)

router.get('/asdf', function(req, res){
  res.send('fefefe')
});
module.exports = app;
module.exports.handler = serverless(app);
