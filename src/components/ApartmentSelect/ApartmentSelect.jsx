import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  resetFilteredApartments,
  setApartmentInputValue,
  setFilteredApartments,
  setIsShowApartments,
} from '../../redux/reducers/apartmentReducer';
import { fetchAllUsers } from '../../redux/reducers/userReducer';
import Select from '../Select/Select';

import styles from './ApartmentSelect.module.css';

const ApartmentSelect = () => {
  const dispatch = useDispatch();

  const { filteredApartments, isDisabled, inputValue, isShow } = useSelector((state) => ({
    filteredApartments: state.apartmentReducer.filteredApartments,
    isDisabled: state.apartmentReducer.isDisabled,
    inputValue: state.apartmentReducer.inputValue,
    isShow: state.apartmentReducer.isShow,
  }));

  const selectApartment = (id, label) => {
    dispatch(setIsShowApartments(false));
    dispatch(setApartmentInputValue(label));
    dispatch(fetchAllUsers(id, label));
  };

  const searchApartment = (event) => {
    const { value } = event.target;
    dispatch(setApartmentInputValue(value));
    if (!value) {
      dispatch(resetFilteredApartments());
    }
    dispatch(setFilteredApartments(value));
  };

  const showOptions = () => {
    dispatch(setIsShowApartments(true));
  };

  const toggleShowOptions = () => {
    dispatch(setIsShowApartments(!isShow));
  };

  return (
    <Select
      inputValue={inputValue}
      options={filteredApartments}
      placeholder="Квартира"
      searchOption={searchApartment}
      setSelectedOption={selectApartment}
      isDisabled={isDisabled}
      showOptions={showOptions}
      toggleShowOptions={toggleShowOptions}
      isShow={isShow}
    />
  );
};

export default ApartmentSelect;
