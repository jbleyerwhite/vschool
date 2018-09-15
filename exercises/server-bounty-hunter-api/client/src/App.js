import React, { Component } from 'react';


class App extends Component {
    constructor(){
      super()
      this.state = {
        bounties: []
      }
    }

    componentDidMount(){
      axios.get('/bounties').then(res => {
        this.setState({
          bounties: res.data
        })
      })
    }


  render() {
    return (
      <div >
          { this.state.bounties.map(bounty => <h1>{bounties.firstName }</h1>)}
      </div>
    );
  }
}

export default App
