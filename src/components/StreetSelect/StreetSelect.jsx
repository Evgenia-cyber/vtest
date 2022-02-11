import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchHouses, setIsHousesDisabled } from '../../redux/reducers/houseReducer';
import { resetFilteredStreets, setFilteredStreets } from '../../redux/reducers/streetReducer';
import Select from '../Select/Select';

import styles from './StreetSelect.module.css';

const StreetSelect = () => {
  const dispatch = useDispatch();

  const { filteredStreets } = useSelector((state) => ({
    filteredStreets: state.streetReducer.filteredStreets,
  }));

  const selectSreet = (id) => {
    dispatch(fetchHouses(id));
    dispatch(setIsHousesDisabled(false));
  };

  return (
    <Select
      options={filteredStreets}
      placeholder="Улица"
      selectType="street_select"
      resetFilteredOptions={resetFilteredStreets}
      setFilteredOptions={setFilteredStreets}
      setSelectedOption={selectSreet}
    />
  );
};

export default StreetSelect;
