
import React, { useState } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState([
      { id: 1, name: 'Tigo', age: 18 },
      { id: 2, name: 'Samvel', age: 17 },
      { id: 3, name: 'Karen', age: 18 },
      { id: 4, name: 'Sego', age: 16 },
      // { id: 5, name: 'Narek', age: 17 }
  ]);
  
  const [showPersons, changeShowPersons] = useState(false)

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.findIndex(p => {
      return p.id === id
    })
    
    const person = {
      ...personsState[personIndex]
    }

    person.name = event.target.value
    const persons = [...personsState]
    persons[personIndex] = person
    setPersonsState(persons);
  }

  const deletePersonHandler = personId => {
    let persons = [...personsState]
    persons.splice(personId, 1)
    setPersonsState(persons)
}
 
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'Lightgreen',
      color: 'black'
    }
  }

  const togglePersonsHandler = () => changeShowPersons(!showPersons)
  
  let persons = (<button style = {style} onClick={togglePersonsHandler}> Show </button>)

  if(showPersons){
    persons = (
      <div>
      <button style = {style} onClick={togglePersonsHandler}> Hide </button>
      {personsState.map((person, index) => {
        return <Person 
          name= {person.name}
          age= {person.age}
          key = {person.id}
          changed = {(event) => nameChangedHandler(event, person.id)}
          click= {() => deletePersonHandler(index)}
        />
      })}
      </div>
    )

    style.backgroundColor= 'red'
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }
  }

  // let classes = ['red', 'bold'].join(' ');
  let classes = []
  if(personsState.length <= 2) classes.push('red') //classes = ['red']
  if(personsState.length <= 1) classes.push('bold') //classes = ['red', 'bold']
   
  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {persons}
      </div>
    </StyleRoot>
  );
};

export default Radium(App);