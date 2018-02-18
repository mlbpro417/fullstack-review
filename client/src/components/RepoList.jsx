import React from 'react';


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
  {props.repos.map(function(item) {
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
