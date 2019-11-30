
export type WeatherServiceContextProps = {

};
export interface ICity {
  id: string,
  isFavourite: boolean,
  localizedName: string,
  country?: string,
  administrative?: string
};

export interface ITemperature {
  temperatureMetr: string,
  temperatureImp: string,
}
export interface IWeather extends ITemperature {
  id: string,
  date?: string,
  type: string,
  icon: number,
};

export interface IFavourite extends ICity, IWeather {};
