import React, { useState } from "react";
import Button from "./Button";

const Joke = () => {
    const [jokeText, setJokeText] = useState("");
    const fetchJoke = () => {
        // Call the JokeAPI (programming category, single joke)
        fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
          .then(res => res.json())
          .then(data => setJokeText(data.joke));
    };

    return (
        <div className="joke-container">
            <Button callApi={fetchJoke} />
            <p>{jokeText}</p>
        </div>
    );
};

export default Joke;
