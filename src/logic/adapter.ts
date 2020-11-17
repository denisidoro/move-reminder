import { INode } from '../types'
import { getColor, FALLBACK_COLOR } from './style'
import { HierarchyMap } from '../structures/hierarchy-map'
import { LINKS, NO_MATCHES } from '../logic/db'

export function styled(node: INode, depth: number = 0, colorMain?: number): INode {
  const { v, c } = node
  const l = depth > 0 ? getColor(colorMain, depth - 1) : FALLBACK_COLOR
  const newV = v == '.' ? '' : v
  const newNode = { ...node, c: null, v: newV, d: depth, l } as INode
  if (newV == LINKS) {
    newNode.p = { ...newNode.p, f: true }
  }
  if (c && c.length > 0) {
    newNode.c = c.map((child, i) => styled(child, depth + 1, colorMain == null ? i : colorMain))
  }
  return newNode
}

function as_map(name, children) {
  return { v: name, c: children }
}

export function adapt(hm: HierarchyMap, query: String): INode {
  var data = hm.walk(as_map)
  const l = data.length
  switch (data.length) {
    case 0:
      data = { v: query, c: [{ v: NO_MATCHES }] }
      break
    case 1:
      data = data[0]
      break
    default:
      data = { ...data[0], v: query, c: data }
  }
  return styled(data)
}
