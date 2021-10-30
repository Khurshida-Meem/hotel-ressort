import { useEffect, useState } from "react";

const useData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(service => setData(service))
            .finally(setLoading(false))
    }, []);

    return {
        data,
        loading
    };
}

export default useData;