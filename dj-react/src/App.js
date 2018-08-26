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

  render () {
  
    const stylesboxContainer = {
      backgroundColor: this.state.backgroundColor
    }

    return (
      <div class="boxContainer" style={stylesboxContainer}>
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
          <button onClick={this.changeColor}>Change Color</button>
      </div>

    )

  }
}

export default App
