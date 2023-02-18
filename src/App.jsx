import { useState } from "react";

import Reddit from "./Reddit";
import Joke from "./Joke";

import "./App.css";

function App() {
    const [redditVisible, setRedditVisible] = useState(false);
    const [jokeVisible, setJokeVisible] = useState(false);

    return (
        <div className="App">
            <div className="buttons">
                <button onClick={() => setRedditVisible((prev) => !prev)}>Toggle Reddit</button>
                <button onClick={() => setJokeVisible((prev) => !prev)}>Toggle Joke</button>
            </div>

            {redditVisible && <Reddit />}
            {jokeVisible && <Joke />}
        </div>
    );
}

export default App;
