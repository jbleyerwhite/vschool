import React, {Component} from 'react';
import Heros from './Heros';

class App extends Component {
  runThis = (phrase) => {
    alert(phrase)
  }
  render () {
      return (
        <div>
          <Heros runThis={this.runThis}/>
          <Heros runThis={this.runThis}/>
        </div>
        

  );
}
}

export default App




