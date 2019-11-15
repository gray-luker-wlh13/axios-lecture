import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount(){
    axios.get('https://swapi.co/api/people/1')
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App"> 
        App Component
      </div>
    );
  }
}

export default App;
