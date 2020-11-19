import React, { useState } from 'react'
import { useMainContext } from '../hooks/context'
import { HOME } from '../logic/db'
import { useDebouncedEffect } from '../hooks/debounce'
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
  const [state, setState] = useState(query)

  useDebouncedEffect(
    () => setQuery(state),
    325,
    [state])

  return (
    <InputGroup
      rightElement={searchButton}
      type='text'
      className='search'
      value={state}
      onChange={(v) => setState(v.target.value)}
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
  const { query, setQuery } = useMainContext()
  const disabled = query == HOME

  return (
    <Navbar fixedToTop className='navbar' style={{ background: 'black' }}>
      <NavbarGroup className='bp3-dark' align={Alignment.LEFT}>
        <NavbarHeading><Icon icon='graph' /></NavbarHeading>
        <NavbarDivider />
        <Search />
        <NavbarDivider />
        <>
          <Button icon='home' className={Classes.MINIMAL} onClick={() => setQuery(HOME)} />
          <NavbarDivider />
          <Button icon='globe' className={Classes.MINIMAL} disabled={disabled} onClick={searchWikipediaClick(query)} />
          <Button icon='book' className={Classes.MINIMAL} disabled={disabled} onClick={searchFarlexClick(query)} />
          <Button icon='camera' className={Classes.MINIMAL} disabled={disabled} onClick={searchGoogleImagesClick(query)} />
          <NavbarDivider />
          <Button icon='help' className={Classes.MINIMAL} onClick={helpClick} />
        </>
      </NavbarGroup>
    </Navbar>
  )
}
