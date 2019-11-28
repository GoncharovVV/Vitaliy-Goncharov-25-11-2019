import * as React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { ICity } from '../../utils/types';
import WithWeatherService from '../HocHelpers/WithWeatherService';
import './Search.scss';
export interface SearchProps {
  getCities?: any;
}

const Search: React.FC<SearchProps> = ({ getCities }) => {
  const [isLoading, setisLoading] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Array<ICity>>([
    {
      id: '323903',
      localizedName: 'Kharkiv',
      country: 'Ukraine',
      administrative: 'some'
    }
  ]);
  const multiple = React.useState<boolean>(false);
  const allowNew = React.useState<boolean>(false);

  const onChange = (selected: Array<ICity>) => {
    if (selected.length > 0) {
      console.log(selected[0].id);
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
      placeholder="Search for a Github user..."
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
export default WithWeatherService(Search, mapMethodsToProps);
