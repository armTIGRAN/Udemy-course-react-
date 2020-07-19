import React, {useEffect} from 'react'
import './Cockpit.css'

import StyledButton from './StyledButton'

const Cockpit = props => {

    useEffect(() => {  // calling every render time 
        console.log('[Cockpit.js] useEffect');
        // HTTPS requests...
        const timer = setTimeout(() => {
            console.log("Data about person was saved")
        }, 1000)
        
    return () => {
            clearTimeout(timer)
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, [props.persons]) // if this array is empty, it will only be called for the first time

    // useEffect(() => {
    //     console.log('[Cockpit.js] 2nd useEffect')
    //     return () => {
    //          console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    //     }
    // })

    let classes = []
    // let classes = ['red', 'bold'].join(' ');

    if (props.personsLength <= 2) classes.push('red') //classes = ['red']
    if (props.personsLength <= 1) classes.push('bold') //classes = ['red', 'bold']

    const buttonValue = value => {if (value) return "Hide"; else return "Show" }

    return ( 
        <div className = "Cockpit" >
            <h1> { props.title } </h1> 
            <p className = { classes.join(' ') } > This is really working! </p>         
            <StyledButton alt = { props.showPersons } onClick = { props.clicked } > { buttonValue(props.showPersons) } </StyledButton > 
        </div>
    );
}

export default React.memo(Cockpit)



