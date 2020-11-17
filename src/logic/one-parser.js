import { HierarchyMap } from '../structures/hierarchy-map'

function countTabs(line) {
  return line.match(whitespaceRegex)[0].length / 2
}

const whitespaceRegex = /^\s*/

export function parse(txt) {
  const hm = new HierarchyMap()
  let parents = []
  txt.split('\n').forEach((line) => {
    const id = line.trim()
    if (id.length > 0) {
      const depth = countTabs(line)
      parents = parents.slice(0, depth)
      const fullId = [...parents, id]
      hm.add(fullId)
      parents[depth] = id
    }
  })
  return hm
}
