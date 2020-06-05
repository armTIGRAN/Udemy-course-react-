
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Tigo', age: 18 },
      { name: 'Samvel', age: 17 },
      { name: 'Karen', age: 18 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = name => {
    setPersonsState({
      persons: [
        { name: name, age: 18 },
        { name: 'Samvel', age: 17 },
        { name: 'Karen', age: 18 }
      ]
    });
    setOtherState('much other value \'')
  };

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Tigran", age: 18 },
        { name: event.target.value, age: 17 },
        { name: 'Karen', age: 18 }
      ]
    });
    setOtherState('much other value \'')
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        // changed = {nameChangedHandler}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click = {() => switchNameHandler("Tigran")}
        changed = {nameChangedHandler}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        // changed = {nameChangedHandler}
      />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default App;
