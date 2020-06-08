import React, { useState } from 'react';
import "./App.css";
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';

// import Button from '@material-ui/core/Button';
// import styled from '@material-ui/styles'
// import Radium, { StyleRoot } from 'radium';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black
  }
`

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
 
  const togglePersonsHandler = () => changeShowPersons(!showPersons)
  
  let persons = (<StyledButton onClick={togglePersonsHandler}> Show </StyledButton>)
  // let persons = (<button className='button' onClick={togglePersonsHandler}> Show </button>)
  if(showPersons){
    persons = (
      <div>
      <StyledButton alt={showPersons} onClick={togglePersonsHandler}> Hide </StyledButton>
      {/* <button className='button' alt={showPersons} onClick={togglePersonsHandler}> Hide </button> */}
      {personsState.map((person, index) => {
        return (
          <ErrorBoundary>
            <Person 
            name= {person.name}
            age= {person.age}
            key = {person.id}
            changed = {(event) => nameChangedHandler(event, person.id)}
            click= {() => deletePersonHandler(index)} />
          </ErrorBoundary>
        )
      })}
      </div>
    )
  }

  // let classes = ['red', 'bold'].join(' ');
  let classes = []
  if(personsState.length <= 2) classes.push('red') //classes = ['red']
  if(personsState.length <= 1) classes.push('bold') //classes = ['red', 'bold']
 
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p className={classes.join(' ')}>This is really working!</p>
      {/* <p className={styles.red}>test</p> */}
      {persons}
    </div>
  );
};

// export default Radium(App);
export default App;