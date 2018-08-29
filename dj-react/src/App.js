import React, {Component} from 'react';
import './App.css'


class App extends Component {
  constructor(){
    super ()
      this.state = {
        backgroundColor: "white"
    }
  }

changeColor = () => {

  this.setState(prevState => {
    if (this.state.backgroundColor === "white"){ 
    return {backgroundColor: "black"}
    } else {
      return {backgroundColor: "white"}
    }
        
  })
}

// changeToPurple = () => {
//   if(this.state.backgroundColor.box1 === "white"){
//     return {backgroundColor: "purple"}
//   } else {
//     return {backgroundColor: "white"}
//   }

//   })
// }

  render () {
  
    const stylesboxContainer = {
      backgroundColor: this.state.backgroundColor
    }

    return (
      <body>
      <div class="boxContainer">
          <div class="box1"  style={stylesboxContainer}></div>
          <div class="box2" style={stylesboxContainer} ></div>
          <div class="box3"  style={stylesboxContainer}></div>
          <div class="box4"  style={stylesboxContainer}></div>
          <button onClick={this.changeColor}>Change Color</button>
          <button onClick={this.changeColor}>Change To Purple</button>
          <button onClick={this.changeColor}>Change Bottom Left</button>
          <button onclick={this.changeColor}>Change Bottom Right</button>
      </div>
      </body>

    )

  }
}

export default App
