import React from 'react'
import WeatherCard from './WeatherCard'
import axios from 'axios'

class Weather extends React.Component {
  state = {
    forecast: []
  }

  componentDidMount = () => {
    let _this = this;
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=611694&APPID=48dad076be1e78ff511664cb64c817d1')
      .then(response => {_this.setState({forecast: response.data.list})})
  }

  render() {
    return (
      <div>
        <h3>Weather for the next 4 days:</h3>
        {
          this.state.forecast.map(day => {
            return (
              <WeatherCard key={day.dt} day={day.dt_txt} summary={day.weather[0].description}></WeatherCard>
            )
          })
        }
      </div>
    )
  }
}

export default Weather;