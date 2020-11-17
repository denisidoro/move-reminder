import React from 'react'
import { Markmap } from './d3'

interface PropsType {
  data: any
  onClick: any
}

class TreeChart extends React.Component<PropsType, {}> {
  myRef: any
  markmap: Markmap

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    const el = this.myRef.current
    const data = this.props.data
    this.markmap = Markmap.create(el, { onClick: this.props.onClick }, data)
  }

  componentDidUpdate() {
    const data = this.props.data
    this.markmap.setData(data)
  }

  componentWillUnmount() {
    // this.markmap.svg.remove()
  }

  render() {
    return <svg style={{ height: '100%', width: '100%' }} ref={this.myRef} />
  }
}

export default TreeChart
