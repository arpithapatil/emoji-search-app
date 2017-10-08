import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons'
import Screen from './Screen'



class App extends Component {
     constructor(props){
      super(props);
      this.state ={
       question: '',
       answer: ''
      }
      this.clickHandler = this.clickHandler.bind(this);
      this.baseState= this.state;
      this.doCalculation=this.doCalculation.bind(this);
    }
    clickHandler(event){
      const value = event.target.value; 
      console.log(value);
     
      if(value === 'AC') this.setState(this.baseState);
   
      else if (value ==='+' || value=== '-' || value==='x'||value==='÷'){
      const newval = this.state.question.concat(` ${value} `)
      console.log(newval);
      this.setState({
      question: newval
      })
     
     } else if(value === '='){ this.doCalculation(this.state.question)
     
      
     }else {
      const newval = this.state.question.concat(value);
      const newans = this.state.answer.concat(value)
       this.setState({
        question: newval,
        answer:newans
       
        })

     }
    }
      doCalculation(str){
      const valarr = str.split(' ')
      let result;
      for(var i=0; i< valarr.length; i++){
      if(valarr[1]=== '+') result=Number( valarr[0] )+ Number(valarr[2]);
      if(valarr[1]=== '-') result= valarr[0] - valarr[2].toString();
      if(valarr[1]=== 'x') result= valarr[0] * valarr[2].toString();
      if(valarr[1]=== '÷') result= valarr[0] / valarr[2].toString();
      }

      
      
      this.setState({
     
        answer: result
      })
    }
    
  
   


      
render() {
    return (
      <div className="App">
        <header className="Calc-App">
        <h1 className="Calc">Simple Calculator</h1>
        </header>
        <Screen  answer={this.state.answer}/>
        {/* <textarea className="screen" rows='1' cols="40"></textarea> */}
       <Buttons  clickHandler={this.clickHandler}/>
  
       
      </div>
    );
  }
}

export default App;
