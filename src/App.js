import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Fetchemoji from './Fetchemoji';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm:''
  };
  this.handleChange = this.handleChange.bind(this);
    
  }
  

handleChange(event){
const newTerm = event.target.value;
//if(newTtweet.length > 140) return;
this.setState({
  searchTerm:newTerm
})
    }
   

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> 😎 Emoji's Bucket 😎</h1>
        </header>
    <h2 className= "Form"></h2> <Form handleChange={this.state.handleChange} />
    <Fetchemoji />
      </div>
    );
  }
}

export default App;
