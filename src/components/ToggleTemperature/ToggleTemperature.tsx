import React from 'react';
import { connect } from 'react-redux';
import { setTemperatureIMP, setTemperatureMETR } from '../../store/actions/actions';
import './ToggleTemperature.scss';

export interface ToggleTemperatureProps {
  setTemperatureIMP: any;
  temperatureType: string;
  setTemperatureMETR: any;
}

const ToggleTemperature: React.SFC<ToggleTemperatureProps> = ({
  setTemperatureIMP,
  temperatureType,
  setTemperatureMETR
}) => {
  const onclick = () => {
    console.log('click');
    if (temperatureType === 'F') setTemperatureMETR();
    else {
      setTemperatureIMP();
    }
  };
  return (
    <div className="toggle-temperature__holder">
      <div className="toggle-temperature">
        <button onClick={onclick} className={temperatureType === 'F' ? 'active' : 'imp'}>
          F
        </button>
        <button onClick={onclick} className={temperatureType === 'C' ? 'active' : 'metr'}>
          C
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    temperatureType: state.temperatureType
  };
};

const mapDispatchToProps = {
  setTemperatureIMP,
  setTemperatureMETR
};
export default connect(mapStateToProps, mapDispatchToProps)(ToggleTemperature);
