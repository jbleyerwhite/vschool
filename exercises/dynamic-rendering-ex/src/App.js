import React, { Component } from 'react';
import Toggle from './Toggle'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      status: true
    }
  }

  handleClick = e => {
      this.setState(prevState =>{
        return {
          status: !prevState.status
        }
      })
  }


  render() {
    return (
      <div>
        <Toggle />
      </div>
    );
  }
}

export default App;
