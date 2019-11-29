import updateFavouritesList from './FavouritesList';
import updateCurrentCity from './CurrentCity';
import updateCityWeather from './CityWeather';
import updateWetherList from './WeatherList';

const reducer = (state: any, action: any) => {
  return {
    favouritesList: updateFavouritesList(state, action),
    currentCity: updateCurrentCity(state, action),
    cityWeather: updateCityWeather(state, action),
    weatherList: updateWetherList(state, action)
  }
};

export default reducer;