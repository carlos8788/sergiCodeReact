import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [dataFetch, setDataFetch] = useState({
        data: null,
        isLoading: true,
        errors: null
    });

    const { data, isLoading, errors } = dataFetch;

    const getFetch = async () => {
        if (!url) return
        try {
            const response = await fetch(url)
            const data = await response.json()
            setDataFetch({
                data,
                isLoading: false,
                errors: null
            })
        } catch (error) {
            setDataFetch({
                data: null,
                isLoading: false,
                errors: error
            })
        }

    };

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data,
        isLoading,
        errors
    }
}
