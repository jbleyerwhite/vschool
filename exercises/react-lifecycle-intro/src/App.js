import React, { Component } from 'react';
  

class App extends Component {
  constructor(){
    super()
    this.state = {
      backgroundColor: "cyan"
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", (e) => {
      if(e.code === "KeyB"){
        this.setState({
          backgroundColor: 'indigo'
        })
      } else if(e.code === "KeyO"){
        this.setState({
          backgroundColor: 'black'
        })
      } else if(e.code === "KeyP"){
        this.setState({
          backgroundColor: 'magenta'
        })
      }
       
    })
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", null) 
  }
 

  render() {
    const styles = {
        container: {
            backgroundColor: this.state.backgroundColor,
            color: 'orange',
            fontWeight: 'lighter',
            fontFamily: 'arial',
            textAlign: 'left',
            paddingLeft: 50

        },
        title: {
          fontSize: 50
        }
    }
    

    return (

      <div style={ styles.container }>
        <h1 style={ styles.title }>Hey World</h1>
      </div>
    )
  }

}

export default App;

// position: 'absolute', 
//           width: 200, 
//           height: 200, 
//           transition: '1s', 
//           left: this.state.left, 
//           top: this.state.top, 
