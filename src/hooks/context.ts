import React, { createContext, useContext, useState, useCallback } from 'react'
import { HOME } from '../logic/db'
import { dedupeFromRight } from '../logic/array'

export const MainContext = createContext({
    query: null,
    setQuery: null,
    setQueryBack: null,
    maps: null,
    history: null,
    setMaps: null,
})

export function useValue() {
    const [data, setData] = useState({ query: HOME, history: [HOME] })
    const [maps, setMaps] = useState(null)

    const setQuery = useCallback(
        (q) => {
            setData(data => ({ query: q, history: dedupeFromRight([...data.history, q]) }))
        },
        [setData, data])

    const setQueryBack = useCallback(
        () => {
            const newHistory = [...data.history]
            newHistory.pop()
            if (newHistory.length > 0) {
                const q = newHistory[newHistory.length - 1]
                setData(data => ({ query: q, history: newHistory }))
            } else {
                setData(data => ({ query: HOME, history: [HOME] }))
            }
        },
        [setQuery, data])

    return {
        query: data.query,
        setQuery,
        setQueryBack,
        history: data.history,
        maps,
        setMaps
    }
}

export const useMainContext = () => useContext(MainContext)
