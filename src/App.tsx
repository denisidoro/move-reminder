import './bootstrap/App.css'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import React, { useEffect } from 'react'
import { MainContext, useValue } from './hooks/context'
import { stringToMap } from './logic/bulk-parser'
import { MainView } from './widgets/main-view'
import { TopBar, LeftBar } from './widgets/nav-bar'
import { getParams, DEFAULT_MAPS_URL, errorMaps } from './logic/url'

/*
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
*/

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
  const value = useValue()

  // TODO: use isVertical
  // const [isVertical, setIsVertical] = useState(isInitiallyVertical) 

  useEffect(() => downloadMindmaps(value.setMaps), [])

  return (
    <MainContext.Provider value={value}>
      <div className='App full-height'>
        <TopBar />
        <LeftBar />
        <MainView />
      </div>
    </MainContext.Provider >
  )
}

export default App
