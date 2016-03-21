import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average (data) {
  return Math.floor(data.reduce((p, c) => p + c) / data.length)
}

export default (props) => {
  return (
  <div>
    <Sparklines
      data={props.data}
      width={180}
      height={50}
      margin={5}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>
      {average(props.data)}
      {props.units}
    </div>
  </div>
  )
}
