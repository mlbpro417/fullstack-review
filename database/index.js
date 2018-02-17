const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // repo id
  id: Number,
  // repo name
  name: String,
  // repo owner (username)
  usernameOfOwner: String,
  // repo url
  url: String,
  // repo number of forks
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let test = {id: 18221276, name: 'git-consortium', usernameOfOwner: 'octocat', url: "https://github.com/octocat/git-consortium", forks: 24}

let save = (repo) => {
  let newRepo = new Repo({id: repo.id, name: repo.name, usernameOfOwner: repo.usernameOfOwner, url: repo.url, forks: repo.forks});
  newRepo.save();
  // This function should save a repo or repos to
  // the MongoDB 
}
save();
module.exports.save = save;
