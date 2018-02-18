import React from 'react';

let test = [ { name: 'discord-irc',
    usernameOfOwner: 'mlbpro417',
    url: 'https://github.com/mlbpro417/discord-irc',
    forks: 0,
    __v: 0 },
  { name: 'recursion-prompts',
    usernameOfOwner: 'mlbpro417',
    url: 'https://github.com/mlbpro417/recursion-prompts',
    forks: 0,
    __v: 0 },
  { name: 'openkore',
    usernameOfOwner: 'mlbpro417',
    url: 'https://github.com/mlbpro417/openkore',
    forks: 0,
    __v: 0 },
  { name: 'discord-irc',
    usernameOfOwner: 'mlbpro417',
    url: 'https://github.com/mlbpro417/discord-irc',
    forks: 0,
    __v: 0 },
  { name: 'recursion-prompts',
    usernameOfOwner: 'mlbpro417',
    url: 'https://github.com/mlbpro417/recursion-prompts',
    forks: 0,
    __v: 0 },
  { name: 'openkore',
    usernameOfOwner: 'mlbpro417',
    url: 'https://github.com/mlbpro417/openkore',
    forks: 0,
    __v: 0 },
  { name: 'recursion-prompts',
    usernameOfOwner: 'mlbpro417',
    url: 'https://github.com/mlbpro417/recursion-prompts',
    forks: 0,
    __v: 0 },
  { name: 'openkore',
    usernameOfOwner: 'mlbpro417',
    url: 'https://github.com/mlbpro417/openkore',
    forks: 0,
    __v: 0 },
  { name: 'discord-irc',
    usernameOfOwner: 'mlbpro417',
    url: 'https://github.com/mlbpro417/discord-irc',
    forks: 0,
    __v: 0 },
  { name: 'undefined.github.io',
    usernameOfOwner: 'undefined',
    url: 'https://github.com/undefined/undefined.github.io',
    forks: 8,
    __v: 0 },
  { name: 'git-consortium',
    usernameOfOwner: 'octocat',
    url: 'https://github.com/octocat/git-consortium',
    forks: 27,
    __v: 0 },
  { name: 'hello-worId',
    usernameOfOwner: 'octocat',
    url: 'https://github.com/octocat/hello-worId',
    forks: 39,
    __v: 0 },
  { name: 'Hello-World',
    usernameOfOwner: 'octocat',
    url: 'https://github.com/octocat/Hello-World',
    forks: 1222,
    __v: 0 },
  { name: 'linguist',
    usernameOfOwner: 'octocat',
    url: 'https://github.com/octocat/linguist',
    forks: 29,
    __v: 0 },
  { name: 'octocat.github.io',
    usernameOfOwner: 'octocat',
    url: 'https://github.com/octocat/octocat.github.io',
    forks: 53,
    __v: 0 },
  { name: 'Spoon-Knife',
    usernameOfOwner: 'octocat',
    url: 'https://github.com/octocat/Spoon-Knife',
    forks: 96542,
    __v: 0 },
  { name: 'test-repo1',
    usernameOfOwner: 'octocat',
    url: 'https://github.com/octocat/test-repo1',
    forks: 3,
    __v: 0 } ]
const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
  <tr>
    <th>Name of Repo</th>
    <th>Username of Owner</th>
    <th>Number of Forks</th>
    <th>URL</th>
  </tr>
  {test.map(function(item) {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.usernameOfOwner}</td>
        <td>{item.forks}</td>
        <td>{item.url}</td> 
      </tr>
    )  
  })}
</table>
  </div>
)

export default RepoList;
