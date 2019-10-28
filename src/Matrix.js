import React, { Component } from 'react';
import data from './data'
import Cell from './Cell'

export default class Matrix extends Component {

  state = {
    values: data.pattern2
  }
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }


}
Matrix.defaultProps = {
  values: data.pattern2
}
