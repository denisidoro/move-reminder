import './bootstrap/App.css'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import React, { useEffect, useState } from 'react'
import { MainContext } from './hooks/context'
import { HOME } from './logic/db'
import { stringToMap } from './logic/bulk-parser'
import { MainView } from './widgets/main-view'
import { NavBar } from './widgets/nav-bar'
import { getParams, DEFAULT_MAPS_URL, errorMaps } from './logic/url'
import { IResizeEntry, ResizeSensor } from "@blueprintjs/core";

const onResize = (setIsVertical) => (entries: IResizeEntry[]) => {
  if (entries.length == 0) {
    setIsVertical(false)
    return
  }
  const e = entries[0]
  setIsVertical(e.contentRect.width < e.contentRect.height)
}

const isInitiallyVertical = window.innerWidth < window.innerHeight

const downloadMindmaps = (setMaps) => {
  const params = getParams(window.location.search)
  const url = params.url || DEFAULT_MAPS_URL

  const catchCallback = (error) => {
    setMaps(stringToMap(errorMaps(url, error)))
  }

  fetch(url)
    .then(response => response.text())
    .catch(catchCallback)
    .then(body => setMaps(stringToMap(body)))
    .catch(catchCallback)
}

function App() {
  const [query, setQuery] = useState(HOME)
  const [maps, setMaps] = useState(null)
  const [isVertical, setIsVertical] = useState(isInitiallyVertical)

  useEffect(() => downloadMindmaps(setMaps), [])

  return (
    <MainContext.Provider value={{ query, setQuery, maps, setMaps }}>
      <ResizeSensor onResize={onResize(setIsVertical)}>
        <div className='App full-height'>
          <NavBar />
          <MainView />
        </div>
      </ResizeSensor>
    </MainContext.Provider >
  )
}

export default App
