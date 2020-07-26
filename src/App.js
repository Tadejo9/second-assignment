import React, {Component} from 'react';
import './App.css';

import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';



class App extends Component {
  state = {
    paragraphValue: "",
  }

  handleInputChange = (event) => {
    this.setState({paragraphValue: event.target.value});
  }

  genereateCharComponents = () => {
    let splitted = this.state.paragraphValue.split('');
    let components = splitted.map((char, index) => {
      return <CharComponent key={index} char={char} />
    });
    return components;
  }

  render() {

    let charComponents = this.genereateCharComponents();
    return (
      <div className="App">
        <input onChange={(event) => this.handleInputChange(event)}></input>
        <p>{this.state.paragraphValue.length}</p>
        <ValidationComponent len={this.state.paragraphValue.length}/>
        {charComponents}
        
      </div>
    );
}
}

export default App;
