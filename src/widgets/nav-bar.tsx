import React, { useCallback, useState } from 'react'
import { useMainContext } from '../hooks/context'
import { HOME } from '../logic/db'
import { useDebouncedEffect } from '../hooks/debounce'
import { History } from './history'
import {
  InputGroup,
  Button,
  Icon,
  Navbar,
  NavbarDivider,
  Divider,
  ButtonGroup,
  NavbarGroup,
  NavbarHeading,
  Colors,
  Position,
  IButtonProps,
  Tooltip,
  Classes
} from '@blueprintjs/core'

interface TooltipButtonProps extends IButtonProps {
  label: string
}

const TooltipButton = ({ label, ...restProps }: TooltipButtonProps) => {
  return restProps.disabled
    ? <Button {...restProps} />
    : <Tooltip content={label} position={Position.RIGHT}>
      <Button {...restProps} />
    </Tooltip>
}

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
      className={Classes.MINIMAL}
      type='text'
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

const worlframClick = (query) => () => {
  window.open(`https://duckduckgo.com/?q=!wolf+${query}`)
}

const helpClick = () => {
  window.open('https://github.com/denisidoro/move-reminder')
}

export const TopBar = () => {
  return (
    <Navbar fixedToTop style={{ background: Colors.BLACK }} >
      <NavbarGroup className='bp3-dark' style={{ width: '100%' }}>
        <NavbarHeading><Icon icon='graph' /></NavbarHeading>
        <NavbarDivider />
        <div style={{ width: '20%' }} >
          <Search />
        </div>
        <NavbarDivider />
        <div style={{ width: '40%' }}>
          <History />
        </div>
      </NavbarGroup>
    </Navbar>
  )
}

export const LeftBar = () => {
  const { query, setQuery, setQueryBack, setQueryForward, history, historyPos } = useMainContext()

  const searchDisabled = query == HOME
  const backDisabled = history.length + historyPos <= 1
  const forwardDisabled = history.length <= 1 || historyPos >= 0
  const goHome = useCallback(() => setQuery(HOME), [setQuery])

  return (
    <ButtonGroup style={{ position: 'absolute', background: Colors.BLACK, paddingTop: '4em', paddingBottom: '0.5em', left: 0, top: 0, borderRadius: '0 0 2em 0', zIndex: 4, width: '3em' }} minimal vertical={true}>
      <span className='button-group'>
        <TooltipButton label="Home" icon='home' onClick={goHome} />
        <TooltipButton label="Undo" icon='undo' disabled={backDisabled} onClick={setQueryBack} />
        <TooltipButton label="Redo" icon='redo' disabled={forwardDisabled} onClick={setQueryForward} />
      </span>
      <Divider />
      <span className='button-group'>
        <TooltipButton label="Wikipedia" icon='globe' disabled={searchDisabled} onClick={searchWikipediaClick(query)} />
        <TooltipButton label="Farlex Dictionary" icon='book' disabled={searchDisabled} onClick={searchFarlexClick(query)} />
        <TooltipButton label="Google Images" icon='camera' disabled={searchDisabled} onClick={searchGoogleImagesClick(query)} />
        <TooltipButton label="Wolfram Alpha" icon='function' disabled={searchDisabled} onClick={worlframClick(query)} />
      </span>
      <Divider />
      <TooltipButton label="Help" icon='help' onClick={helpClick} />
      <Divider />
    </ButtonGroup>
  )
}