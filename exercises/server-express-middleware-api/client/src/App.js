import React, { Component } from 'react';



class App extends Component {
  constructor() {
    super()
    this.state = {
      football: []
    }
  }


  componentDidMount(){
    axios.get('/football').then(res => {
     //console.log(res.data) :  this checks that your data is workin w the response
      this.setState({
        football: res.data
      })
    })
  }



  render() {
    return (
        <div>
          { this.state.football.map()}
        </div>
    )
  }
}


export default App
