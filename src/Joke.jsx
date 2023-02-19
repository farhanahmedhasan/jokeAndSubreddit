import { useQuery } from "react-query";

export default function Joke() {
    const {
        data: joke,
        isLoading,
        isSuccess,
    } = useQuery("joke", fetchJoke, {
        staleTime: 6000,
        refetchOnWindowFocus: false,
        retry: false,
    });

    function fetchJoke() {
        return fetch("https://official-joke-api.appspot.com/jokes/random").then((response) =>
            response.json()
        );
    }

    return (
        <div>
            <h2>Joke API</h2>

            {isLoading && <div>Loading...</div>}

            {isSuccess && (
                <div>
                    <p>{joke.setup}</p>
                    <p>{joke.punchline}</p>
                </div>
            )}

            {joke?.type === "error" && <div>{joke.message}</div>}
        </div>
    );
}
