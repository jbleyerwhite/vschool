import React from 'react';
import Pets from './Pets';

const Friend = (props) => {
    
    const pets = props.pets.map((pet, i) => {
        return (
            <li key={pet.name + i}>
                {pet.name}
                {pet.breed}
            </li>
        )
    })

    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
                {pets}

        </div>
    )
}

export default Friend