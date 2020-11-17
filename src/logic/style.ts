import { Colors } from '@blueprintjs/core'

const colorKeys = [
  'BLUE',
  'GREEN',
  'ORANGE',
  'RED',
  'COBALT',
  'FOREST',
  'GOLD',
  'INDIGO',
  'LIME',
  'ROSE',
  'SEPIA',
  'TURQUOISE',
  'VERMILION',
  'VIOLET'
]

export const FALLBACK_COLOR = Colors.BLACK

export function getColor (i: number, j: number) {
  var key = colorKeys[i % (colorKeys.length)]
  const k = j < 4 ? 5 - j : 1
  key = `${key}${k}`
  return Colors[key] || FALLBACK_COLOR
}
