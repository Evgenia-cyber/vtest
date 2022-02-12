import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchHouses, setHouseInputValue, setIsHousesDisabled } from '../../redux/reducers/houseReducer';
import { resetFilteredStreets, setFilteredStreets, setStreetInputValue } from '../../redux/reducers/streetReducer';
import Select from '../Select/Select';

import styles from './StreetSelect.module.css';

const StreetSelect = () => {
  const dispatch = useDispatch();

  const { filteredStreets, inputValue } = useSelector((state) => ({
    filteredStreets: state.streetReducer.filteredStreets,
    inputValue: state.streetReducer.inputValue,
  }));

  const selectSreet = (id, label) => {
    dispatch(setStreetInputValue(label));
    dispatch(fetchHouses(id));
    dispatch(setIsHousesDisabled(false));
  };

  const searchStreet = (event) => {
    const { value } = event.target;
    dispatch(setStreetInputValue(value));
    if (value === '') {
      dispatch(resetFilteredStreets());

      dispatch(setIsHousesDisabled(true));
      dispatch(setHouseInputValue(''));
    }
    dispatch(setFilteredStreets(value));
  };

  return (
    <Select
      inputValue={inputValue}
      options={filteredStreets}
      placeholder="Улица"
      selectType="street_select"
      searchOption={searchStreet}
      setSelectedOption={selectSreet}
    />
  );
};

export default StreetSelect;
