import React from 'react';
import { connect } from 'react-redux';
import { setTemperatureIMP, setTemperatureMETR } from '../../store/actions/actions';
import { ISetTemperature } from '../../store/actions/types';
import { temperatureTypeF, temperatureTypeС } from '../../utils/constants';
import { IState } from '../../utils/types';
import './ToggleTemperature.scss';

export interface ToggleTemperatureProps {
  setTemperatureIMP: ISetTemperature;
  temperatureType: string;
  setTemperatureMETR: ISetTemperature;
}

const ToggleTemperature: React.SFC<ToggleTemperatureProps> = ({
  setTemperatureIMP,
  temperatureType,
  setTemperatureMETR
}) => {
  const onclick = () => {
    if (temperatureType === temperatureTypeF) setTemperatureMETR();
    else {
      setTemperatureIMP();
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
const mapStateToProps = (state: IState) => {
  return {
    temperatureType: state.temperatureType
  };
};

const mapDispatchToProps = {
  setTemperatureIMP,
  setTemperatureMETR
};
export default connect(mapStateToProps, mapDispatchToProps)(ToggleTemperature);
