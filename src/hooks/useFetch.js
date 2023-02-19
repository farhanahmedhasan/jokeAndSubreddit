import { useState, useEffect } from "react";

export default function useFetch(url, initialValue = null) {
    const [data, setData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setIsLoading(false);
                setData(result);
            })
            .catch((error) => {
                setIsLoading(false);
                setErrorMessage(error);
            });
    }, [url]);

    return { data, isLoading, errorMessage };
}
