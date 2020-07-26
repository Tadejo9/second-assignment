import React, {Component} from 'react';
import './App.css';

import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';



class App extends Component {
  state = {
    paragraphValue: "",
  }

  handleInputChange = event => {
    this.setState({paragraphValue: event.target.value});
  }

  deleteHandler = (index) => {
    let splitted = this.state.paragraphValue.split('');
    console.log(splitted);
    splitted.splice(index, 1);
    let newValue = splitted.join('');
    this.setState({paragraphValue: newValue});
  }

  genereateCharComponents = () => {
    return this.state.paragraphValue.split('').map((char, index) => {
      return <CharComponent key={index} char={char} deleteHandler={() => this.deleteHandler(index)} />
    });
  }

  render() {

    let charComponents = this.genereateCharComponents();
    return (
      <div className="App">
        <input onChange={(event) => this.handleInputChange(event)} value={this.state.paragraphValue} />
        <p>{this.state.paragraphValue.length}</p>
        <ValidationComponent len={this.state.paragraphValue.length} />
        {charComponents}
      </div>
    );
}
}

export default App;
