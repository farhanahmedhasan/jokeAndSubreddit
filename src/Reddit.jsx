import { useState, useEffect } from "react";

export default function Reddit() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch("https://www.reddit.com/r/aww.json")
            .then((response) => response.json())
            .then((results) => {
                setIsLoading(false);
                setPosts(results.data.children);
            })
            .catch((error) => {
                setIsLoading(false);
                setErrorMessage("There was an error");
            });
    }, []);

    return (
        <div>
            <h2>Reddit API </h2>

            {isLoading && <div>Loading..</div>}

            {posts && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.data.id}>
                            <a
                                href={`https://www.reddit.com/${post.data.permalink}`}
                                target="_blank"
                            >
                                {post.data.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

            {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
}
