// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Tigo', age: 18 },
//       { name: 'Samvel', age: 17 },
//       { name: 'Karen', age: 18 },
//       { name: 'Sego', age: 16 },
//       { name: 'Narek', age: 17 }],
//     showPersons: false
//   };

//   nameChangedHandler = event => {
//     this.setState( {
//       persons: [
//         { name: "Tigran", age: 18 },
//         { name: event.target.value, age: 17 },
//         { name: 'Karen', age: 18 }
//       ]});
//   }

//   deletePersonHandler = personId => {
//     let persons = [...this.state.persons]
//     persons.splice(personId, 1)
//     this.setState({persons: persons})
//   }

//   style = {
//     backgroundColor: 'white',
//     font: 'inherit',
//     border: '1px solid blue',
//     padding: '8px',
//     cursor: 'pointer'
//   }

//   togglePersonsHandler = () => this.setState({showPersons: !this.state.showPersons})

//   render(){
//     let persons = (<button style = {this.style} onClick={this.togglePersonsHandler}> Show </button>)

//     if(this.state.showPersons){
//       persons = (
//         <div>
//         <button style = {this.style} onClick={this.togglePersonsHandler}> Hide </button>
//         {this.state.persons.map((person, index) => {
//           return <Person 
//             name={person.name}
//             age={person.age}
//             changed = {this.nameChangedHandler}
//             click= {() => this.deletePersonHandler(index)}
//           />
//         })}
//         </div>
//       )
//     }

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         {persons}
//       </div>
//     )};
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
// };

// export default App;

////

import React, { useState } from 'react';
import "./App.css";

// import Button from '@material-ui/core/Button';
// import styled from '@material-ui/styles'
// import Radium, { StyleRoot } from 'radium';

// import TextField from '@material-ui/core/TextField';

// import Persons from '../components/Persons/Persons';
// import Cockpit from '../components/Cockpit/Cockpit'

// const App = props => {
//   const [personsState, setPersonsState] = useState([
//       { id: 1, name: 'Tigo', age: 18 },
//       { id: 2, name: 'Samvel', age: 17 },
//       { id: 3, name: 'Karen', age: 18 },
//       { id: 4, name: 'Sego', age: 16 },
//       // { id: 5, name: 'Narek', age: 17 }
//   ]);
//   const [showPersons, showPersonsState] = useState(false)
//   const [showCockpit, CockpitState] = useState(true)

//   const nameChangedHandler = (event, id) => {

//     const personIndex = personsState.findIndex(p => {
//       return p.id === id
//     })

//     const person = {
//       ...personsState[personIndex]
//     }

//     person.name = event.target.value
//     const persons = [...personsState]
//     persons[personIndex] = person
//     setPersonsState(persons);
//   }

//   const deletePersonHandler = personId => {
//     let persons = [...personsState]
//     persons.splice(personId, 1)
//     setPersonsState(persons)
// }

//   const togglePersonsHandler = () => showPersonsState(!showPersons)

//   // let persons = (<button className='button' onClick={togglePersonsHandler}> Show </button>)
//   let persons = null
//   if(showPersons){
//     persons = (
//       <div>
//         <Persons persons={personsState} clicked={deletePersonHandler} changed={nameChangedHandler}/>
//       </div>
//     )
//   }

//   return (
//     <div className='App'>
//       <button onClick= {() => {CockpitState(!showCockpit)}}>Removed Cockpit</button>
//       {showCockpit ? <Cockpit clicked={togglePersonsHandler} title={props.appTitle} showPersons={showPersons} persons={personsState}/> : null}
//       {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
//       {persons}
//     </div>  
//   )
// };

// // export default Radium(App);
// export default App;