import axios from 'axios'

const API_KEY = 'de87016eff16fba5edc1fc1c49c5216e'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
