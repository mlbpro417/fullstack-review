import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [{name: 'josh'}]
    }
  }
  componentDidMount() {
    this.fetch();
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: term,
      //contentType: 'application/json',
      success: function(data) {
        console.log('post successful');
        console.log('hello from AJAX POST success', data);
      },
      error: function(data) {
        console.error('POST was not successful', data);
      }
    })
  }

  fetch() {
    $.ajax({
      method: 'GET',
      url: '/repos',
      //contentType: 'application/json',
      success: (data) => {
        console.log('GET success', data);
        this.setState({repos: data})
        console.log(this.state.repos)
      },
      error: function(data) {
        console.error('GET was not successful', data);
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));