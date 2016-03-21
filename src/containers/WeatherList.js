import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'

function kToF (K) {
  return Math.round((K - 273.15) * 1.8000 + 32.00)
}

class WeatherList extends Component {

  renderWeather(cityData, i) {
    const temperature = cityData.list.map((n, i) => Math.floor(n.main.temp))
    const pressure = cityData.list.map((n, i) => n.main.pressure)
    const humidity = cityData.list.map((n, i) => n.main.humidity)

    return (
    <tr key={i}>
      <td>
        {cityData.city.name}
      </td>
      <td>
        <Chart data={temperature} color="orange" units="F" />
      </td>
      <td>
        <Chart data={pressure} color="blue" units="hPa" />
      </td>
      <td>
        <Chart data={humidity} color="green" units="%" />
      </td>
    </tr>
    )
  }

  render() {
    return (

    <table className="table table-hover">
      <thead>
        <tr>
          <th>
            City
          </th>
          <th>
            Temperature (F)
          </th>
          <th>
            Pressure (hPa)
          </th>
          <th>
            Humidity (%)
          </th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>

    )
  }
}

function mapStateToProps ({ weather }) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList)
