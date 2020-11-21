import React, { createContext, useContext, useState, useCallback } from 'react'
import { HOME } from '../logic/db'
import { dedupeFromRight } from '../logic/array'

export const MainContext = createContext({
    query: null,
    setQuery: null,
    setQueryBack: null,
    setQueryForward: null,
    maps: null,
    history: null,
    setMaps: null,
    historyPos: 0,
})

const initialState = { query: HOME, history: [HOME], historyPos: 0 }

export function useValue() {
    const [data, setData] = useState(initialState)
    const [maps, setMaps] = useState(null)

    const setQuery = useCallback(
        (q) => {
            setData(data => {
                if (q == HOME) {
                    return initialState
                }
                const slicedHistory = data.history.slice(0, data.history.length + data.historyPos)
                return {
                    query: q,
                    history: dedupeFromRight([...slicedHistory, q]),
                    historyPos: 0
                }
            })
        },
        [setData, data])

    const setQueryBack = useCallback(
        () => {
            setData(data => {
                const newHistoryPos = data.historyPos - 1
                const q = data.history[data.history.length - 1 + newHistoryPos]
                if (q == null) {
                    return initialState
                } else {
                    return {
                        ...data,
                        query: q,
                        historyPos: newHistoryPos
                    }
                }
            })
        },
        [setData, data])

    const setQueryForward = useCallback(
        () => {
            setData(data => {
                const newHistoryPos = data.historyPos + 1
                const q = data.history[data.history.length - 1 + newHistoryPos]
                if (q == null) {
                    return data
                } else {
                    return {
                        ...data,
                        query: q,
                        historyPos: newHistoryPos
                    }
                }
            })
        },
        [setData, data])

    return {
        query: data.query,
        setQuery,
        setQueryBack,
        setQueryForward,
        history: data.history,
        maps,
        setMaps,
        historyPos: data.historyPos
    }
}

export const useMainContext = () => useContext(MainContext)
