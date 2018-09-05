
import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            left: 0,
            top: 0
        }
    }

    componentDidMount(){
        window.addEventListener('keydown', this.moveBox)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.moveBox)
    }

    moveBox = e => {
        console.log(e)
        if(e.code === "ArrowLeft"){
            this.setState(prevState => ({
                left: prevState.left - 25
            }))
        } else if(e.code === "ArrowUp"){
            this.setState(prevState => ({
                top: prevState.top - 25
            }))
        } else if(e.code === "ArrowRight"){
            this.setState(prevState => ({
                left: prevState.left + 25
            }))
        } else if(e.code === "ArrowDown"){
            this.setState(prevState => ({
                top: prevState.top + 25
            }))
        }
    }

    render(){
        const styles = {
            container: {
                position: 'absolute', 
                width: 200, 
                height: 200, 
                transition: '1s', 
                left: this.state.left, 
                top: this.state.top, 
                backgroundColor: 'cyan'
            }
        }
        return (
            <div style={ styles.container }>
            
            </div>
        )
    }
}

export default App


// moveBox = e => {
//   console.log(e)
//   if (e.code === "ArrowLeft") {
//       this.setState(prevState => ({
//           left: prevState.left - 25
//       }))
//   } else if (e.code === "ArrowUp") {
//       this.setState(prevState => ({
//           top: prevState.top - 25
//       }))
//   } else if (e.code === "ArrowRight") {
//       this.setState(prevState => ({
//           left: prevState.left + 25
//       }))
//   } else if (e.code === "ArrowDown") {
//       this.setState(prevState => ({
//           top: prevState.top + 25
//       }))
//   }
// }