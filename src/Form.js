import React from 'react';
import PT from 'prop-types';
// const CHAR_LIMIT =10;

class Form extends React.Component {
  constructor (props) {
    super(props);
    
  }


render() {
    return (
      <div>
      <form onSubmit={this.props.handleChange}>
        <label>
          Get your Favourite Emoji's  :
          {/* {CHAR_LIMIT - this.props.searchTerm.length} */}
          <input type="text"  placeholder=' Type here '/>
        </label>
        <input type="submit" value="search"  />
      </form>
      </div>
    );
  }
  static propTypes = {

   
  }
}
export default Form;