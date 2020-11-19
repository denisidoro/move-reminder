import React, { createContext, useContext } from 'react'

export const MainContext = createContext({ query: null, setQuery: null, maps: null, setMaps: null })

export const useMainContext = () => useContext(MainContext)
