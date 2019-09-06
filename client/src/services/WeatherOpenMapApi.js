import axios from 'axios'

class WeatherApi {
  static getApi () {
    return axios.create({
      baseURL: `http://api.openweathermap.org/data/2.5/forecast?APPID=4502dec827ac30b2e0603b04f4d95e30&id=501175`
    })
  }
}
export default WeatherApi
