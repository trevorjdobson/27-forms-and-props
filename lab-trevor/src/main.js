import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Foo'
    }
  this.performSearch = this.performSearch.bind(this)
  }
  performSearch(query){
    if (query) {
      this.setState({results: []});
    }else {
      this.setState({results: []});
    }
  }
  

  render(){
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm earch={this.performSearch}/>
      <SearchResults results={this.state.results} />
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);