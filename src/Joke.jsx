import useFetch from "./hooks/useFetch";

export default function Joke() {
    const {
        data: joke,
        isLoading,
        errorMessage,
    } = useFetch("https://official-joke-api.appspot.com/jokes/random", null);


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

            {errorMessage && <div>{errorMessage?.message}</div>}
        </div>
    );
}
