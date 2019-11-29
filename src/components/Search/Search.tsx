import * as React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import { updateCity } from '../../actions/actions';
import { ICity } from '../../utils/types';
import WithWeatherService from '../HocHelpers/WithWeatherService';
import './Search.scss';
export interface SearchProps {
  getCities?: any,
  currentCity?: any,
  updateCity?: any
}

const Search: React.FC<SearchProps> = ({ getCities, currentCity, updateCity }) => {
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
    getCities(query).then((res: Array<ICity>) => {
      setisLoading(false);
      setOptions(() => {
        return res;
      });
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

const mapMethodsToProps = (weatherService: any) => {
  return {
    getCities: weatherService.getCities
  };
};
const mapStateToProps = (state: any) => {
  return {
    currentCity: state.currentCity
  }
};
const mapDispatchToProps = {
  updateCity
};
export default WithWeatherService(connect(mapStateToProps, mapDispatchToProps)(Search), mapMethodsToProps);
