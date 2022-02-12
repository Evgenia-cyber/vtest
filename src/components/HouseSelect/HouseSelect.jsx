import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchApartments, setIsApartmentsDisabled } from '../../redux/reducers/apartmentReducer';
import { resetFilteredHouses, setFilteredHouses, setHouseInputValue } from '../../redux/reducers/houseReducer';
import Select from '../Select/Select';

import styles from './HouseSelect.module.css';

const HouseSelect = () => {
  const dispatch = useDispatch();

  const { filteredHouses, isDisabled, inputValue } = useSelector((state) => ({
    filteredHouses: state.houseReducer.filteredHouses,
    isDisabled: state.houseReducer.isDisabled,
    inputValue: state.houseReducer.inputValue,
  }));

  const selectHouse = (id, label) => {
    dispatch(setHouseInputValue(label));
    dispatch(fetchApartments(id));
    dispatch(setIsApartmentsDisabled(false));
  };

  const searchHouse = (event) => {
    const { value } = event.target;
    dispatch(setHouseInputValue(value));
    if (value === '') {
      dispatch(resetFilteredHouses());

      dispatch(setIsApartmentsDisabled(true));
      dispatch(setApartmentInputValue(''));
    }
    dispatch(setFilteredHouses(value));
  };

  return (
    <Select
      inputValue={inputValue}
      options={filteredHouses}
      placeholder="Дом"
      searchOption={searchHouse}
      setSelectedOption={selectHouse}
      isDisabled={isDisabled}
    />
  );
};

export default HouseSelect;
