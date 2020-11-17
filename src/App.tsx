import './bootstrap/App.css'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import React, { useEffect, useState } from 'react'
import { MainContext } from './context'
import { HOME } from './logic/db'
import { stringToMap } from './logic/bulk-parser'
import { MainView } from './widgets/main-view'
import { NavBar } from './widgets/nav-bar'
import { getParams, DEFAULT_MAPS_URL, errorMaps } from './logic/url'

console.clear()

function App() {
  const [query, setQuery] = useState(HOME)
  const [maps, setMaps] = useState(null)

  useEffect(() => {
    const params = getParams(window.location.search)
    const url = params.url || DEFAULT_MAPS_URL

    const catchCallback = () => { setMaps(errorMaps(url)) }

    fetch(url)
      .then(response => response.text())
      .catch(catchCallback)
      .then(body => setMaps(stringToMap(body)))
      .catch(catchCallback)
  }, [])

  return (
    <MainContext.Provider value={{ query, setQuery, maps, setMaps }}>
      <div className='App full-height'>
        <NavBar />
        <MainView />
      </div>
    </MainContext.Provider>
  )
}

export default App
