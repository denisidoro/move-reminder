import React, { useState } from 'react'
import { useMainContext } from '../hooks/context'
import { HOME } from '../logic/db'
import { useDebouncedEffect } from '../hooks/debounce'
import { BreadcrumbsExample } from './history'
import {
  InputGroup,
  Alignment,
  Button,
  Classes,
  Icon,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core'

const searchButton = (
  <Button
    icon='search'
    minimal
  />
)

const Search = () => {
  const { query, setQuery } = useMainContext()

  // TODO: use debounced value
  /*
  const [state, setState] = useState(query)

  useDebouncedEffect(
    () => setQuery(state),
    325,
    [state])
  */

  return (
    <InputGroup
      rightElement={searchButton}
      className='search'
      type='text'
      width='20em'
      value={query}
      onChange={(v) => setQuery(v.target.value)}
    />
  )
}

const searchWikipediaClick = (query) => () => {
  window.open(`https://duckduckgo.com/?q=!+wikipedia+pt+en+${query}`)
}

const searchGoogleImagesClick = (query) => () => {
  window.open(`https://www.google.com.br/search?tbm=isch&hl=en&source=hp&biw=1024&bih=673&q=${query}&btnG=Search+Images&gbv=2&oq=&aq=&aqi=&aql=&gs_l=&gws_rd=ssl`)
}

const searchFarlexClick = (query) => () => {
  window.open(`https://duckduckgo.com/?q=!+thefreedictionary+${query}`)
}

const helpClick = () => {
  window.open('https://github.com/denisidoro/move-reminder')
}

export const NavBar = () => {
  const { query, setQuery, setQueryBack, setQueryForward, history, historyPos } = useMainContext()
  const searchDisabled = query == HOME
  const backDisabled = history.length + historyPos <= 1
  const forwardDisabled = history.length <= 1 || historyPos >= 0

  return (
    <Navbar fixedToTop className='navbar' style={{ background: 'black' }}>
      <NavbarGroup className='bp3-dark' align={Alignment.LEFT}>
        <NavbarHeading><Icon icon='graph' /></NavbarHeading>
        <NavbarDivider />
        <Search />
        <NavbarDivider />
        <>
          <Button icon='home' className={Classes.MINIMAL} onClick={() => setQuery(HOME)} />
          <Button icon='undo' className={Classes.MINIMAL} disabled={backDisabled} onClick={() => setQueryBack()} />
          <Button icon='redo' className={Classes.MINIMAL} disabled={forwardDisabled} onClick={() => setQueryForward()} />
          <NavbarDivider />
          <Button icon='globe' className={Classes.MINIMAL} disabled={searchDisabled} onClick={searchWikipediaClick(query)} />
          <Button icon='book' className={Classes.MINIMAL} disabled={searchDisabled} onClick={searchFarlexClick(query)} />
          <Button icon='camera' className={Classes.MINIMAL} disabled={searchDisabled} onClick={searchGoogleImagesClick(query)} />
          <NavbarDivider />
          <Button icon='help' className={Classes.MINIMAL} onClick={helpClick} />
          <NavbarDivider />
          <div className='history'>
            <BreadcrumbsExample />
          </div>
        </>
      </NavbarGroup>
    </Navbar>
  )
}
