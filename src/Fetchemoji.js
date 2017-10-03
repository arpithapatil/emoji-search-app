import emojiList from './emojiList.json';
import React from 'react';

class Fetchemoji extends React.Component {
  
    
    render () {
    const list = emojiList.map((emoji) => <li>{`${emoji.symbol} \b ${emoji.title}`}</li>);
    return (

        <div className="Emojilist">
        <ul className="Emoji">{list}</ul>
         </div>
      );
    }
  }
  
  export default Fetchemoji;