import React, {Component} from 'react';

import './App.css';

import Person from './Person/Person';

class App extends Component {

 state = {
    persons: [
      {name: 'Tigo', age: '17'},   
      {name: 'Samvel', age: '17'},   
      {name: 'Karen', age: '18'},
      {name: 'Sego', age: '16'}
    ]
  }

  switchNameHandler = () => {
    this.state.persons[0].name = 'Max'
    this.setState({    
      persons: [
        {name: 'Tigran', age: '17'},   
        {name: 'Samvel', age: '17'},   
        {name: 'Karen', age: '18'},
        {name: 'Sego', age: '17'}
    ]})  
  } 

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobies: minecraft</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    )
  }

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world from React app!!!' ));
};

export default App;
