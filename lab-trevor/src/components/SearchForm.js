import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  listMovies(){
    return this.props.results.map((result, i) => {
      return <li key={i}>{result}</li>
    })
  }
  updateInput(ev){
    let input = ev.target.value;
    this.setState({userInput: input});
  }

  handleSubmit(ev){
    ev.preventDefault();
    this.props.search(this.state.userInput);
  }

  render(){
    return <form onSubmit={this.handleSubmit}>
      <input type="text" 
      onChange={this.updateInput}
      value={this.state.userInput} placeholder ="search" />
      <button>search</button>
    </form>
  }
}

module.exports = SearchForm;