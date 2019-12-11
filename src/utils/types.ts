export interface ICity {
  id: string,
  localizedName: string,
  country?: string,
  administrative?: string
};

export interface ITemperature {
  temperatureMetr: string,
  temperatureImp: string,
};

export interface IWeather extends ITemperature {
  id?: string,
  date?: string,
  type: string,
  icon: number,
};

export interface ICityItems {
  items: Array<ICity>
};

export interface IFavList {
  favouritesList: ICityItems;
};

export interface IWeatherList {
  error: boolean,
  isLoading: boolean,
  items: Array<IWeather>
};
export interface ICitiesList {
  error: boolean,
  isLoading: boolean,
  items: Array<ICity>
};

export interface IState extends IFavList {
  currentCity: ICity,
  temperatureType: string,
  weatherList: IWeatherList,
  citiesList: ICitiesList
};