import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTemperatureIMP, setTemperatureMETR } from '../../store/actions/actions';
import { temperatureTypeF, temperatureTypeС } from '../../utils/constants';
import { IState } from '../../utils/types';
import './ToggleTemperature.scss';

export interface ToggleTemperatureProps {}

const ToggleTemperature: React.SFC<ToggleTemperatureProps> = () => {
  const temperatureType: string = useSelector((state: IState) => state.temperatureType);
  const dispatch = useDispatch();

  const onclick = () => {
    if (temperatureType === temperatureTypeF) dispatch(setTemperatureMETR());
    else {
      dispatch(setTemperatureIMP());
    }
  };
  return (
    <div className="toggle-temperature__holder">
      <div className="toggle-temperature">
        <button
          onClick={onclick}
          className={temperatureType === temperatureTypeF ? 'active' : 'imp'}
        >
          F
        </button>
        <button
          onClick={onclick}
          className={temperatureType === temperatureTypeС ? 'active' : 'metr'}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default ToggleTemperature;
