const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // repo id
  id: { type: Number, unique: true },
  // repo name
  name: { type: String, unique: true },
  // repo owner (username)
  usernameOfOwner: { type: String, unique: true },
  // repo url
  url: { type: String, unique: true },
  // repo number of forks
  forks: { type: Number, unique: true }
});

let Repo = mongoose.model('Repo', repoSchema);

//let test = {id: 18221276, name: 'git-consortium', usernameOfOwner: 'octocat', url: "https://github.com/octocat/git-consortium", forks: 24}

let save = (listOfRepos) => {
  //Repo.create
  listOfRepos.forEach(function(repo) {
    let newRepo = new Repo({repoId: repo.repoId, name: repo.name, usernameOfOwner: repo.usernameOfOwner, url: repo.url, forks: repo.forks});
    newRepo.save();
  })
}

module.exports.save = save;
module.exports.Repo = Repo;
