import React from "react";

const Button = (props) => {
    return (
        <button onClick={props.callApi}>
            Generate New Joke
        </button>
    );
};

export default Button;
