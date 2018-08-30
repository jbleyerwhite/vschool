import React from 'react'

const Display = (props) => {
    return (
        <div className="badge">
            <h1>Badge:</h1>
            <p>Name: { props.firstName } {props.lastName }</p>
            <p>Place of Birth: { props.birthPlace }</p>
            <p>Favorite Food: { props.favoriteFood }</p>
            <p>Email: { props.email }</p>
        </div>
    );
};

export default Display

