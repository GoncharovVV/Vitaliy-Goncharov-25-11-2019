import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { ICity, IWeather } from '../../utils/types';
import { WeatherServiceContex } from '../WeatherServiceContext';
import { updateCity } from '../../store/actions/cityActions';
import { toast } from 'react-toastify';


import { formatDate } from '../../utils/helper';
import { connect } from 'react-redux';
import Spinner from '../Spinner/indexs';
export interface FavouritesItemProps extends ICity {
  updateCity?: any,
}
toast.configure({
  autoClose: 2000,
  draggable: false,
});
const FavouritesItem: React.FC<FavouritesItemProps> = ({
  id,
  localizedName,
  country,
  administrative,
  updateCity
}) => {
  const history = useHistory();
  const { getWeather, getWeatherIcon } = useContext(WeatherServiceContex);
  const [imgUrl, setImgUrl] = useState('');
  const [type, setType] = useState('-');
  const [temperatureImp, setTemperatureImp] = useState('-');
  const [temperatureMetr, setTemperatureMetr] = useState('-');
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    if (id) {
      // getWeather(id).then(({ icon, temperatureImp, temperatureMetr, type }:IWeather) => {
      //   setIsLoading(false);
      //   const imgUrl = getWeatherIcon(icon);
      //   setImgUrl(imgUrl);
      //   setType(type);
      //   setTemperatureImp(temperatureImp);
      //   setTemperatureMetr(temperatureMetr);
      // }).catch((err:any) => {toast.warn(`Something is wrong ${err}`)});
    }
  }, [id, getWeather]);
  const onClick = () => {
    // console.log('click');
    updateCity({id, localizedName, country, administrative});
    history.push('/');
  };
  return (
    <li className="card-item">
      <button className="card-item__content" onClick={onClick}>
        <p className="card-item__date">{localizedName}</p>
        {
          isLoading ?
          <Spinner /> :
          <>
            {/* <img src={imgUrl} className="card-item__image" alt="type" />
            <h3 className="card-item__title">{type}</h3>
            <div className="card-item__temp">
              {temperatureImp} / {temperatureMetr}
            </div> */}
          </>
        }
      </button>
    </li>
  );
}
const mapStateToProps = (state: any) => {
  return {
    currentCity: state.currentCity
  };
};
const mapDispatchToProps = {
  updateCity
};
export default connect(mapStateToProps, mapDispatchToProps)(FavouritesItem);