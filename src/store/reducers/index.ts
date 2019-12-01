import updateFavouritesList from './FavouritesList';
import updateCurrentCity from './CurrentCity';
import updateWetherList from './WeatherList';
import updateTemperatureType from './TemperatureType';

const reducer = (state: any, action: any) => {
  return {
    favouritesList: updateFavouritesList(state, action),
    currentCity: updateCurrentCity(state, action),
    weatherList: updateWetherList(state, action),
    temperatureType: updateTemperatureType(state, action)
  }
};

export default reducer;