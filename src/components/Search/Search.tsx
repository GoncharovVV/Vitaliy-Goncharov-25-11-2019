import * as React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { ICity } from '../../utils/types';
import './Search.scss';
import { WeatherServiceConsumer } from '../WeatherServiceContext';
export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
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
    <WeatherServiceConsumer>
      {({ getCities }: any) => {
        return (
          <AsyncTypeahead
            id="typehad-id"
            isLoading={isLoading}
            allowNew={allowNew[0]}
            multiple={multiple[0]}
            placeholder="Search for a Github user..."
            onChange={(selected: Array<ICity>) => {
              if (selected.length>0) {
                console.log(selected[0].id);
              }
            }}
            onSearch={(query: string) => {
              setisLoading(true);
              getCities(query).then((res: any) => {
                setisLoading(false);
                setOptions(() => {
                  return res;
                });
              });
            }}
            labelKey={option => `${option.localizedName} (${option.country} / ${option.administrative})`}
            options={options}
          />
        )
      }}
    </WeatherServiceConsumer>
  );
}

export default Search;