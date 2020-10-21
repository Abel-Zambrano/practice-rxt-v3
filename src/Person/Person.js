import React from 'react';
import './Person.css';

// const age = new Date().getFullYear() - 1996;
// console.log(age);

const Person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click} >I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.inputName} value={props.name} />
        </div>
    )   
    }

export default Person;