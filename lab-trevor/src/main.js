import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Foo'
    }
  
  }

  

  render(){
    return <div>
      
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);