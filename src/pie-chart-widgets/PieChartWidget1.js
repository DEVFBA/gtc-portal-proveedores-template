import React from 'react'
import PropTypes from 'prop-types'
import PieChart1 from './PieChart1'
import IconWidget4 from '../icon-widgets/IconWidget4'
//import '../css/donut-chart-widgets/donut-chart-widget-1.css'

const PieChartWidget1 = ({widgets, data, colors, height}) => {
  return (
    <div className="donut-chart-widget-1">
      <div className="row align-items-center justify-content-center">
        <div className="col">
          <PieChart1 data={data} colors={colors} height={height} />
        </div>
      </div>
      <div className="row text-center">
        {widgets.map((widget, i) => (
          <div className="col col-lg-6" key={i}>
            <IconWidget4 {...widget} />
          </div>
        ))}
      </div>
    </div>
  )
}

PieChartWidget1.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.array,
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number
}

export default PieChartWidget1
