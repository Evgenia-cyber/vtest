import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  resetFilteredApartments,
  setApartmentInputValue,
  setFilteredApartments,
} from '../../redux/reducers/apartmentReducer';
import Select from '../Select/Select';

import styles from './ApartmentSelect.module.css';

const ApartmentSelect = () => {
  const dispatch = useDispatch();

  const { filteredApartments, isDisabled, inputValue } = useSelector((state) => ({
    filteredApartments: state.apartmentReducer.filteredApartments,
    isDisabled: state.apartmentReducer.isDisabled,
    inputValue: state.apartmentReducer.inputValue,
  }));

  const selectApartment = (id, label) => {
    dispatch(setApartmentInputValue(label));
    // dispatch(fetchApartments(id));
    // dispatch(setIsApartmentsDisabled(false));
  };

  const searchApartment = (event) => {
    const { value } = event.target;
    dispatch(setApartmentInputValue(value));
    if (value === '') {
      dispatch(resetFilteredApartments());
    }
    dispatch(setFilteredApartments(value));
  };

  return (
    <Select
      inputValue={inputValue}
      options={filteredApartments}
      placeholder="Квартира"
      searchOption={searchApartment}
      setSelectedOption={selectApartment}
      isDisabled={isDisabled}
    />
  );
};

export default ApartmentSelect;
