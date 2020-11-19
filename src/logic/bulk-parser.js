export function stringToMap(text) {
  const m = {}
  let filename = ''

  if (text.length > 0) {
    text.split('\n').forEach(line => {
      if (line[0] === '>') {
        filename = line.substring(2)
        m[filename] = []
      } else if (filename.length > 0) {
        m[filename].push(line)
      }
    })
  }

  const m2 = {}
  Object.entries(m).forEach(([k, v]) => {
    m2[k] = v.join('\n')
  })

  return m2
}
