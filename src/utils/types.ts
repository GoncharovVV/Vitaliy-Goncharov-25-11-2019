export interface ICitiesResponce {
  Version: number,
  Key: string,
  Type: string,
  Rank: number,
  LocalizedName: string,
  Country: { ID: string, LocalizedName: string },
  AdministrativeArea: { ID: string, LocalizedName: string }
};
export interface ICity {
  key: string,
  localizedName: string
};
export interface ITemperatureValue {
  value: number,
  unit: string
};
export interface ITemperature {
  temperature: {
    metric: ITemperatureValue,
    imperial: ITemperatureValue
  }
}
export interface IWeather extends ITemperature {
  date?: string,
  type: string,
  icon: number,
};

export interface IFavourite extends ICity, IWeather {};
