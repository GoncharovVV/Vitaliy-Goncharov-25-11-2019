import * as React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import WeatherService from '../../services/WeatherService';
import { ICity } from '../../utils/types';
import './Search.scss';
export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const weatherService = new WeatherService();
  const { getCities } = weatherService;

  const [isLoading, setisLoading] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Array<ICity>>([{
    id: '323903',
    localizedName: 'Kharkiv',
    country: 'Ukraine',
    administrative: 'some'
  }]);
  const multiple = React.useState<boolean>(false);
  const allowNew = React.useState<boolean>(false);
  return (
      <AsyncTypeahead
        id="typehad-id"
        isLoading={isLoading}
        allowNew={allowNew[0]}
        multiple={multiple[0]}
        placeholder="Search for a Github user..."
        onSearch={(query: string) => {
          setisLoading(true);
          getCities(query).then(res => {
            setisLoading(false);
            setOptions(prev => {

              return res;
            });
          });
        }}
        labelKey={option => `${option.localizedName} (${option.country} / ${option.administrative})`}
        options={options}
      />
    );
  }

export default Search;