import React, { useContext } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { updateCity } from '../../store/actions/cityActions';
import { ICity } from '../../utils/types';
import { WeatherServiceContex } from '../WeatherServiceContext';
import './Search.scss';
import { currentCity } from '../../utils/stateConstants';
toast.configure({
  autoClose: 2000,
  draggable: false
});
export interface SearchProps {
  getCities?: any;
  currentCity?: any;
  updateCity?: any;
}

const Search: React.FC<SearchProps> = ({ currentCity, updateCity }) => {
  const { getCities } = useContext(WeatherServiceContex);
  const [isLoading, setisLoading] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Array<ICity>>([currentCity]);
  const multiple = React.useState<boolean>(false);
  const allowNew = React.useState<boolean>(false);

  const onChange = (selected: Array<ICity>) => {
    if (selected.length > 0) {
      updateCity(selected[0]);
    }
  };

  const onSearch = (query: string) => {
    setisLoading(true);
    getCities(query)
      .then((res: Array<ICity>) => {
        setisLoading(false);
        setOptions(() => {
          return res;
        });
      })
      .catch((err: any) => {
        toast.warn(`Something is wrong ${err}`);
      });
  };

  const getLabelKey = (option: ICity) =>
    `${option.localizedName} (${option.country} / ${option.administrative})`;

  return (
    <AsyncTypeahead
      id="typehad-id"
      isLoading={isLoading}
      allowNew={allowNew[0]}
      multiple={multiple[0]}
      placeholder="Search for City weather"
      onChange={onChange}
      onSearch={onSearch}
      labelKey={getLabelKey}
      options={options}
    />
  );
};

Search.defaultProps = {
  getCities: () => {}
};

const mapStateToProps = (state: any) => {
  return {
    currentCity: state[currentCity]
  };
};
const mapDispatchToProps = {
  updateCity
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
