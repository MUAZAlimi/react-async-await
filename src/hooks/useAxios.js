import { useState, useEffect } from "react";

const useAxios = (configObj) => {
    const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
    } = configObj;

    const [response, setResponse] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       const controller = new AbortController()

       const fetchData = async () => {
        try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig,
                    signal: controller.signal
                })
                console.log(res)
                setResponse(res.data)
        } catch (error) {
            console.log(error);
            setError(error.message)
        } finally {
            setLoading(false)
        }
       }

       fetchData();
       return () => controller.abort()
    })
    return [response, loading, error]
}

export default useAxios;