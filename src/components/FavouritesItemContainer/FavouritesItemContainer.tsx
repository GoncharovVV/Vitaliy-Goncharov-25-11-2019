import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateCity } from '../../store/actions/cityActions';
import { temperatureTypeF } from '../../utils/constants';
import { ICity, IState, IWeather } from '../../utils/types';
import FavouritesItem from '../FavouritesItem';
import { WeatherServiceContex } from '../WeatherServiceContext';
import { getWeatherIcon } from '../../utils/helper';
export interface FavouritesItemContainerProps {
  city: ICity;
}
toast.configure({
  autoClose: 2000,
  draggable: false
});
const FavouritesItemContainer: React.FC<FavouritesItemContainerProps> = ({ city }) => {
  const temperatureType = useSelector((state: IState) => state.temperatureType);
  const dispatch = useDispatch();

  const history = useHistory();

  const { getWeather } = useContext(WeatherServiceContex);

  const [imgUrl, setImgUrl] = useState<string>('');
  const [type, setType] = useState<string>('-');
  const [temperatureImp, setTemperatureImp] = useState<string>('-');
  const [temperatureMetr, setTemperatureMetr] = useState<string>('-');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  React.useEffect(() => {
    if (city.id) {
      getWeather(city.id)
        .then(({ icon, temperatureImp, temperatureMetr, type }: IWeather) => {
          setIsLoading(false);
          const imgUrl = getWeatherIcon(icon);
          setImgUrl(imgUrl);
          setType(type);
          setTemperatureImp(temperatureImp);
          setTemperatureMetr(temperatureMetr);
        })
        .catch((err: any) => {
          toast.warn(`Something is wrong ${err}`);
        });
    }
  }, [city.id, getWeather]);

  const onClick = () => {
    dispatch(updateCity(city));
    history.push('/');
  };

  return (
    <FavouritesItem
      isLoading={isLoading}
      localizedName={city.localizedName}
      imgUrl={imgUrl}
      type={type}
      temperature={temperatureType === temperatureTypeF ? temperatureImp : temperatureMetr}
      onClick={onClick}
    />
  );
};

export default FavouritesItemContainer;
