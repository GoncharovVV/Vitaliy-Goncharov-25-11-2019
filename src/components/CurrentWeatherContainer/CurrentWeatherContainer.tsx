import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { temperatureTypeF } from '../../utils/constants';
import { IState, IWeather } from '../../utils/types';
import CurrentWeather from '../CurrentWeather';
import Spinner from '../Spinner/indexs';
import { WeatherServiceContex } from '../WeatherServiceContext';
import './CurrentWeatherContainer.scss';

export interface CurrentWeatherContainerProps {}

const CurrentWeatherContainer: React.FC<CurrentWeatherContainerProps> = () => {
  const { getWeather, getWeatherIcon } = useContext(WeatherServiceContex);
  const { id: cityId } = useSelector((state: IState) => state.currentCity);
  const temperatureType = useSelector((state: IState) => state.temperatureType);

  const [imgUrl, setImgUrl] = useState<string>('');
  const [type, setType] = useState<string>('-');
  const [temperatureImp, setTemperatureImp] = useState<string>('-');
  const [temperatureMetr, setTemperatureMetr] = useState<string>('-');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (cityId) {
      setLoading(true);
      getWeather(cityId)
        .then(({ icon, temperatureImp, temperatureMetr, type }: IWeather) => {
          const imgUrl = getWeatherIcon(icon);
          setImgUrl(imgUrl);
          setType(type);
          setTemperatureImp(temperatureImp);
          setTemperatureMetr(temperatureMetr);
          setLoading(false);
        })
        .catch((err: any) => {
          toast.warn(`Something is wrong ${err}`);
        });
    }
  }, [cityId, getWeather, getWeatherIcon]);

  return (
    <div className="current-weather">
      {loading ? (
        <Spinner />
      ) : (
        <CurrentWeather
          imgUrl={imgUrl}
          type={type}
          temperature={temperatureType === temperatureTypeF ? temperatureImp : temperatureMetr}
        />
      )}
    </div>
  );
};
export default CurrentWeatherContainer;
