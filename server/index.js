const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const github = require('../helpers/github.js')
const db = require('../database/index.js')

let app = express();
let upload = multer();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/repos', upload.array(), function (req, res) {
  //console.log('hello from app.post', req.body);
  let username = Object.getOwnPropertyNames(req.body)[0];
  console.log(username);
  let dataFromGithub = github.getReposByUsername(username, function(err, data, body) {
    //console.log('hello body', body);
    let newBody = JSON.parse(body).map(function(item) {
      let result = {};
      result.repoId = item.id;
      result.name = item.name;
      result.usernameOfOwner = item.owner.login;
      result.ownerId = item.owner.id;
      result.forks = item.forks;
      result.url = item.html_url;
      
      return result;
    })
    console.log(newBody)
    db.save(newBody);
  });

  //console.log(dataFromGithub);
  res.status(201).send();
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

});

app.get('/repos', upload.array(), function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('hello from GET', req.body);
  db.Repo.find(function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log('hello from DB', data);
  res.status(200).send(data);
})
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

