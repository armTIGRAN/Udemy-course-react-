
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState([
      { name: 'Tigo', age: 18 },
      { name: 'Samvel', age: 17 },
      { name: 'Karen', age: 18 }
  ]);
  
  const [showPersons, changeShowPersons] = useState(false)

  const nameChangedHandler = event => {
    setPersonsState([
        { name: "Tigran", age: 18 },
        { name: event.target.value, age: 17 },
        { name: 'Karen', age: 18 }
      ]);
  }

  const deletePersonHandler = personId => {
    let persons = personsState
    persons.splice(personId, 1)
    console.log(persons)
    setPersonsState(persons)
  }
 
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  const togglePersonsHandler = () => changeShowPersons(!showPersons)
  
  let persons = (<button style = {style} onClick={togglePersonsHandler}> Show </button>)

  if(showPersons){
    persons = (
      <div>
      <button style = {style} onClick={togglePersonsHandler}> Hide </button>
      {personsState.map((person, index) => {
        return <Person 
          name={person.name}
          age={person.age}
          changed = {nameChangedHandler}
          click= {() => deletePersonHandler(index)}
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
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default App;
