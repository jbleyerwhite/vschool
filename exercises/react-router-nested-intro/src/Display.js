import React from 'react'

const Display = (props) => {
    return (
        <div class="badge">
            <h1>Badge:</h1>
            <p>Name:{ props.fistName } {props.lastName }</p>
            <p>Place of Birth:{ props.birthPlace }</p>
            <p>Favorite Food:{ props.favoriteFood }</p>
            <p>Email:{ props.email }</p>
        </div>
    );
};

export default Display

