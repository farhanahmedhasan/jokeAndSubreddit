import useFetch from "./hooks/useFetch";

export default function Reddit() {
    const {
        data: posts,
        isLoading,
        errorMessage,
    } = useFetch("https://www.reddit.com/r/aww.json", []);

    return (
        <div>
            <h2>Reddit API </h2>

            {isLoading && <div>Loading..</div>}

            {posts && (
                <ul>
                    {posts.data?.children.map((post) => (
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

            {errorMessage && <div>{errorMessage?.message}</div>}
        </div>
    );
}
