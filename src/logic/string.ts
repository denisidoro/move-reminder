export function normalize(txt) {
  return txt.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export function matchesNormalized(subject, pattern) {
  return normalize(subject).includes(pattern)
}
