import React, { Component } from 'react';


class Screen extends Component {
render(){
    return (
      <div className="screen">
        <p>{this.props.answer}</p>
     
      </div>
    );
  }

}
 
  export default Screen;