import React, { useMemo } from 'react'
import TreeChart from './tree-chart'
import { isInternalCommand, queryFunctionBuilder } from '../logic/db'
import { useMainContext } from '../hooks/context'
import { adapt } from '../logic/adapter'
import { INode } from '../types'

const Mindmap = () => {
  const { query, setQuery, maps } = useMainContext()

  const queryFunction = useMemo(
    () => maps == null ? null : queryFunctionBuilder(maps),
    [maps])

  const data = useMemo(
    () => queryFunction == null ? null : adapt(queryFunction(query), query),
    [queryFunction, query])

  return data == null
    ? null
    : <TreeChart
      data={data}
      onClick={({ v }: INode) => {
        if (isInternalCommand(v)) {
          return
        }
        setQuery(v)
      }} />
}

export default Mindmap
