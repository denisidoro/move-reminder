import { INode as CommonINode } from 'markmap-common'
import { Markmap } from '../widgets/tree-chart/d3'

export type IMarkmap = typeof Markmap

export interface IMarkmapOptions {
  id?: string
  duration?: number
  nodeFont?: string
  nodeMinHeight?: number
  spacingVertical?: number
  spacingHorizontal?: number
  autoFit?: boolean
  onClick?: (node: INode) => void
  fitRatio?: number
  color?: (node: INode) => string
  paddingX?: number
  style?: (id: string) => string
}

export interface IMarkmapState {
  id: string
  data?: INode
  minX?: number
  maxX?: number
  minY?: number
  maxY?: number
}

export interface IMarkmapFlexTreeItem {
  parent: IMarkmapFlexTreeItem
  data: INode
  depth: number
  xSize: number
  ySize: number
  ySizeInner: number
  x: number
  y: number
}

export interface IMarkmapLinkItem {
  source: IMarkmapFlexTreeItem
  target: IMarkmapFlexTreeItem
}

export interface INode extends CommonINode {
  /**
   * color
   */
  l?: string
}
