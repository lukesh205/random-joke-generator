// src/App.js
import React from "react";
import Joke from "./components/Joke";
import './App.css';


function App() {
    return (
        <div className="App">
            <h1>Random Joke Generator</h1>
            <Joke />
        </div>
    );
}

export default App;
