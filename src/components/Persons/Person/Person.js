import React, { Component } from 'react';
// import styled from 'styled-components'
import "./Person.css"
import PropTypes from 'prop-types'

import Aux from '../../../hoc/auxilliary'
import withClass from '../../../hoc/WithClass'


// const StyleDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width: 450px;
//     }
// `;

class person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    //  throw new Error('test error') 
    
    // return (
    //     <StyleDiv>  
    //         <p onClick={props.clicked}> I'm a {props.name} and I am {props.age} years old!</p>
    //         <p>{props.children}</p>
    //         <input type="text" onChange={props.changed} value = {props.name} />
    //     </StyleDiv>  
    // )

    // return [
    //     <p onClick={props.clicked}> I'm a {props.name} and I am {props.age} years old!</p>,
    //     <p> {props.children}</p>,
    //     <input type="text" onChange={props.changed} value = {props.name} />
    // ]

    componentDidMount(){
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js] rendering...')
        return (
            <Aux>  
                <p onClick={this.props.clicked}> I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    // ref={inputEl => this.inputElement = inputEl} 
                    ref = {this.inputElementRef}
                    type="text" onChange={this.props.changed} 
                    value = {this.props.name} />
            </Aux>  
        )
    }
};

person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(person, 'Person');

