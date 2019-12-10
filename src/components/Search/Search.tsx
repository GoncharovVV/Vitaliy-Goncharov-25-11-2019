import React, { useContext } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateCity } from '../../store/actions/cityActions';
import { ICity, IState } from '../../utils/types';
import { WeatherServiceContex } from '../WeatherServiceContext';
import './Search.scss';
toast.configure({
  autoClose: 2000,
  draggable: false
});
export interface SearchProps {
  getCities?: any;
}

const Search: React.FC<SearchProps> = () => {
  const currentCity: ICity = useSelector((state: IState) => state.currentCity);
  const dispatch = useDispatch();

  const { getCities } = useContext(WeatherServiceContex);

  const [isLoading, setisLoading] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Array<ICity>>([currentCity]);
  const multiple = React.useState<boolean>(false);
  const allowNew = React.useState<boolean>(false);

  const onChange = (selected: Array<ICity>) => {
    if (selected.length > 0) {
      dispatch(updateCity(selected[0]));
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

export default Search;
