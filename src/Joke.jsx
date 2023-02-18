import { useState, useEffect } from "react";

export default function Joke() {
    const [joke, setJoke] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/jokes/random")
            .then((response) => response.json())
            .then((result) => {
                setIsLoading(false);
                setJoke({ setup: result.setup, punchline: result.punchline });
            })
            .catch((error) => {
                setIsLoading(false);
                setErrorMessage("There was an error");
            });
    }, []);

    return (
        <div>
            <h2>Joke API</h2>

            {isLoading && <div>Loading...</div>}

            {joke && (
                <div>
                    <p>{joke.setup}</p>
                    <p>{joke.punchline}</p>
                </div>
            )}

            {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
}
