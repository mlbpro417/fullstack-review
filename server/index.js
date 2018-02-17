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
    //console.log('hello data', data);
    let newBody = JSON.parse(body).map(function(item) {
      let result = {};
      result.repoId = item.id;
      result.name = item.name;
      result.usernameOfOwner = item.owner.login;
      result.ownerId = item.owner.id;
      result.forks = item.forks;
      result.url = item.html_url;
      
      return result;
      // console.log(item.id);
      // // name
      // console.log(item.name);
      // // owner.login
      // console.log(item.owner.login);
      // // owner.id
      // console.log(item.owner.id);
      // // forks
      // console.log(item.forks);
      // // html_url
      // console.log(item.html_url);
    })
    console.log(newBody)
    db.save(newBody[0]);
  });

  //console.log(dataFromGithub);
  //res.send(dataFromGithub);
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

