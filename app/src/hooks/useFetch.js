import React, { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [dataPersonel, setDataPersonel] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDataPersonel(data)
        })
        .catch((err) => {
            setError(err)
        })
        .finally((_) => {
            setLoading(false)
        })
    }, [url])

    return [ dataPersonel, loading, error ]
}