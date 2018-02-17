const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const getReposByUsername = require('../helpers/github.js')

let app = express();
let upload = multer();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/repos', upload.array(), function (req, res) {
  console.log('hello from app.post', req.body);
  console.log(getReposByUsername);
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

