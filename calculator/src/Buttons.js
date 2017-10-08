import React, { Component } from 'react';
import PT from 'prop-types';
const  buttonBox = ['AC',0,'=','÷',7,8,9,'x',4,5,6,'-',1,2,3,'+'];

class Buttons extends Component {
  

render() {
     
        return (
          <div className="buttons">
              {buttonBox.map((ele)=>{
              return <button onClick={this.props.clickHandler} key ={ele} className="button" value={ele}>{ele}</button>})}
      </div>
        );

      }

    
    }
    Buttons.propTypes = {
      clickHandler: PT.func.isRequired
    }
    
    export default Buttons;
    