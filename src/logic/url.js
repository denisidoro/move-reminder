export function getParams(location) {
  const searchParams = new URLSearchParams(location)
  const m = {}
  for (const [k, v] of searchParams.entries()) {
    m[k] = v
  }
  return m
}

export const DEFAULT_MAPS_URL = 'mindmaps.txt'

export function errorMaps(url, error) {
  const escapedUrl = url.replaceAll('/', '\\/')
  return `> Unable to get/${escapedUrl}
   Failed to download mindmap
> Exception/${error}
   Javascript exception`
}
