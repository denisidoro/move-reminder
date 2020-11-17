import { equal as arraysEqual } from './array'
import { parse } from './one-parser'
import { HierarchyMap } from '../structures/hierarchy-map'
import { normalize, matchesNormalized } from './string'

export const LINKS = 'links'
export const HOME = ''
export const NO_MATCHES = 'no matches'

function pathStrToVec(path) {
  return path.split('/')
}

function external(path, match) {
  const x = match.slice(0, path.length)
  return !arraysEqual(x, path)
}

export function queryFunctionBuilder(maps) {
  function fileMatches(pattern) {
    return Object.keys(maps)
      .filter((path) => matchesNormalized(path, pattern))
      .map(pathStrToVec)
  }

  function nodeMatches(pattern) {
    const matches = []
    Object.entries(maps).forEach(([path, txt]) => {
      if (matchesNormalized(txt, pattern)) {
        const filePath = pathStrToVec(path)
        const parsed = parse(txt)
        const mapPath = parsed.dfs(pattern, matchesNormalized) || []
        matches.push([...filePath, ...mapPath])
      }
    })
    return matches
  }

  function findByPath(txt) {
    return Object.keys(maps).filter((p) => {
      if (matchesNormalized(p, txt)) {
        const parts = pathStrToVec(p)
        const lastPart = parts[parts.length - 1]
        if (normalize(lastPart.trim()) == txt) {
          return true
        }
      }
      return false
    })[0]
  }

  function home() {
    const hm = new HierarchyMap()
    Object.keys(maps).forEach(k => {
      hm.add(pathStrToVec(k))
    })
    return hm
  }

  function query(txt): HierarchyMap {
    if (txt == HOME) {
      return home()
    }
    const normalizedText = normalize(txt).trim()
    const path = findByPath(normalizedText)
    const hm = path ? parse(maps[path]) : new HierarchyMap()
    const isExternal = (m) => {
      return !path || external(pathStrToVec(path), m)
    }
    const matches = [...fileMatches(normalizedText), ...nodeMatches(normalizedText)]
    const firstNode = Object.keys(hm.m)[0]
    matches
      .filter(isExternal)
      .forEach((m) => hm.add(path ? [firstNode, LINKS, ...m] : m))
    return hm
  }

  return query
}

export function isInternalCommand(txt: string): boolean {
  return txt == LINKS || txt == HOME || txt == NO_MATCHES
}
