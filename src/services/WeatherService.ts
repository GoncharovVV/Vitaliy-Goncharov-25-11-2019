import { IWeather } from '../utils/types';
import { apiUrl } from '../utils/constants';
export default class WeatherService {
  _apiKey = process.env['REACT_APP_API_KEY'];

  getResource = async (url: string): Promise<any> => {
    const res = await fetch(`${apiUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Could not get data, received ${res.status}`);
    }
    return await res.json();
  };

  getWeather = async (cityKey: number): Promise<IWeather> => {
    const res = await this.getResource(`currentconditions/v1/${cityKey}?apikey=${this._apiKey}`);
    return this._transformWeatherSingle(res);
  };

  _transformWeatherSingle = (weatherArr: Array<any>): IWeather => {
    const { WeatherIcon, WeatherText, Temperature } = weatherArr[0];
    const { Metric, Imperial } = Temperature;
    return {
      type: WeatherText,
      icon: WeatherIcon,
      temperatureMetr: `${Metric.Value} ${Metric.Unit}`,
      temperatureImp: `${Imperial.Value} ${Imperial.Unit}`
    };
  };
}
