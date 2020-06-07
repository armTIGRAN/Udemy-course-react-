import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tigo', age: 18 },
      { name: 'Samvel', age: 17 },
      { name: 'Karen', age: 18 },
      { name: 'Sego', age: 16 },
      { name: 'Narek', age: 17 }],
    showPersons: false
  };
  
  nameChangedHandler = event => {
    this.setState( {
      persons: [
        { name: "Tigran", age: 18 },
        { name: event.target.value, age: 17 },
        { name: 'Karen', age: 18 }
      ]});
  }

  deletePersonHandler = personId => {
    let persons = [...this.state.persons]
    persons.splice(personId, 1)
    this.setState({persons: persons})
  }
  
  style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  
  togglePersonsHandler = () => this.setState({showPersons: !this.state.showPersons})

  render(){
    let persons = (<button style = {this.style} onClick={this.togglePersonsHandler}> Show </button>)

    if(this.state.showPersons){
      persons = (
        <div>
        <button style = {this.style} onClick={this.togglePersonsHandler}> Hide </button>
        {this.state.persons.map((person, index) => {
          return <Person 
            name={person.name}
            age={person.age}
            changed = {this.nameChangedHandler}
            click= {() => this.deletePersonHandler(index)}
          />
        })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {persons}
      </div>
    )};
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default App;
