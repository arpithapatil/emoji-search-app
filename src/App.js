import React, { Component } from 'react';
import './App.css';
import emojiList from './emojiList.json';

function filterEmojis (emojis, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  return emojis.filter(emoji => {
    return emoji.title.toLowerCase().includes(searchTerm) || emoji.keywords.includes(searchTerm);
  });
}

// { const emojiList = emojiList.replace(/[A-Z]+/g,'')};
// console.log(emojiList);

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e) {
    this.setState({
      searchTerm: e.target.value
    });
  }
  render() {
    console.log('render!')
    return (
      <div className="App">
        <header className='header'>
        </header> 
          
        <body>
        <h1 className='heading'> Emoji's Island</h1> 
        <form className='body'>
          <h3>Find your favourite emoji here </h3>
          <input className='form'
            type='text' 
            placeholder='what is your mood... ??'
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </form>
        </body>
         
        {filterEmojis(emojiList, this.state.searchTerm).map(emoji => {
          return (
            
            <span className='emoji'>
              {emoji.symbol}
            </span>
          
          )
        })}
      </div>
    );
  }
}

export default App;
