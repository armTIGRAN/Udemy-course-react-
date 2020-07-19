import React, { Component } from 'react';
import "./App.css";

// import Button from '@material-ui/core/Button';
// import styled from '@material-ui/styles'
// import Radium, { StyleRoot } from 'radium';

// import TextField from '@material-ui/core/TextField';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/WithClass'
import Aux from '../hoc/auxilliary'

class App extends Component {
  // constructor(props){
  //   super(props)
  //   // console.log('[App.js] constructor');
  // } 
  
  state = {
    persons: [
      { id: 1, name: 'Tigo', age: 18 },
      { id: 2, name: 'Samvel', age: 17 },
      { id: 3, name: 'Karen', age: 18 },
      { id: 4, name: 'Sego', age: 16 },
    ],
    showPersons: true,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  UNSAFE_componentWillMount() {  // 
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {  // Вызывается, когда компонент и его "дети" отрендерились
    console.log('[App.js] componentDidMount');
  }

  componentWillUnmount() {  // Вызывается при удалении компонента из DOM
    console.log('[App.js] componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    // return false;
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState((prevState, state) => { 
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1
        };
    });
  }

  deletePersonHandler = personId => {
    let persons = [...this.state.persons]
    persons.splice(personId, 1)
    this.setState({persons: persons})
}
 
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  } 

  render(){
    console.log('[App.js] rendering...')
    let persons = null

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler}/>
        </div>
      )
    }
  
    return (
      <Aux>
        <button onClick={() => {
          const doesShow = this.state.showCockpit;
          this.setState({showCockpit: !doesShow})
        }}>Removed Cockpit</button>
        {this.state.showCockpit ? 
            <Cockpit 
              clicked={this.togglePersonsHandler} 
              title={this.props.appTitle} 
              showPersons={this.state.showPersons} 
              personsLength={this.state.persons.length}/> 
          : null}
        {persons}
      </Aux>
    )
  }
  // let persons = (<button className='button' onClick={togglePersonsHandler}> Show </button>)

};

// export default Radium(App);
export default withClass(App, 'App');