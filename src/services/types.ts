export interface ICitiesResponce {
  Version: number,
  Key: string,
  Type: string,
  Rank: number,
  LocalizedName: string,
  Country: { ID: string, LocalizedName: string },
  AdministrativeArea: { ID: string, LocalizedName: string }
};

export interface IWeatherFevDaysResponse {
  Headline: object,
  DailyForecasts: object
}