import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { IWeather } from '../../utils/types';
import Spinner from '../Spinner/indexs';
import { WeatherServiceContex } from '../WeatherServiceContext';
import './CurrentWeather.scss';
export interface CurrentWeatherProps {
  cityId: any;
  temperatureType: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ cityId, temperatureType }) => {
  const { getWeather, getWeatherIcon } = useContext(WeatherServiceContex);
  const [imgUrl, setImgUrl] = useState('');
  const [type, setType] = useState('-');
  const [temperatureImp, setTemperatureImp] = useState('-');
  const [temperatureMetr, setTemperatureMetr] = useState('-');
  const [loading, setLoading] = useState(true);
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
        <>
          <img className="card-item__image" src={imgUrl} alt={type} />
          <p className="main__type">{type}</p>
          <p className="main__temp">
            {temperatureType === 'F' ? <> {temperatureImp} </> : <> {temperatureMetr} </>}
          </p>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    cityId: state.currentCity.id,
    temperatureType: state.temperatureType
  };
};

export default connect(mapStateToProps)(CurrentWeather);
