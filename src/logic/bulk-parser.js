export function stringToMap (text) {
  const m = {}
  let filename = ''

  text.split('\n').forEach(line => {
    if (line[0] === '>') {
      filename = line.substring(2)
      m[filename] = []
    } else {
      m[filename].push(line)
    }
  })

  const m2 = {}
  Object.entries(m).forEach(([k, v]) => {
    m2[k] = v.join('\n')
  })

  return m2
}
