import React, { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchCitiesList } from '../../store/actions/citiesListActions';
import { updateCity } from '../../store/actions/cityActions';
import { ICity, IState } from '../../utils/types';
import './Search.scss';
toast.configure({
  autoClose: 2000,
  draggable: false
});
export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const { items, isLoading } = useSelector((state: IState) => state.citiesList);
  const dispatch = useDispatch();

  const multiple = useState<boolean>(false);
  const allowNew = useState<boolean>(false);

  const onChange = (selected: Array<ICity>) => {
    if (selected.length > 0) {
      dispatch(updateCity(selected[0]));
    }
  };

  const onSearch = (query: string) => {
    dispatch(fetchCitiesList(query));
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
      options={items}
    />
  );
};
export default Search;
