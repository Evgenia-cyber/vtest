import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setApartmentInputValue,
  setIsApartmentsDisabled,
  setIsShowApartments,
} from '../../redux/reducers/apartmentReducer';
import {
  fetchHouses,
  setHouseInputValue,
  setIsHousesDisabled,
  setIsShowHouses,
} from '../../redux/reducers/houseReducer';
import {
  resetFilteredStreets,
  setFilteredStreets,
  setIsShowStreets,
  setStreetInputValue,
} from '../../redux/reducers/streetReducer';
import Select from '../Select/Select';

import styles from './StreetSelect.module.css';

const StreetSelect = () => {
  const dispatch = useDispatch();

  const { filteredStreets, inputValue, isShow } = useSelector((state) => ({
    filteredStreets: state.streetReducer.filteredStreets,
    inputValue: state.streetReducer.inputValue,
    isShow: state.streetReducer.isShow,
  }));

  const selectSreet = (id, label) => {
    dispatch(setIsShowStreets(false));
    dispatch(setStreetInputValue(label));
    dispatch(fetchHouses(id));
    dispatch(setIsHousesDisabled(false));
  };

  const disableHouseSelect = () => {
    dispatch(setIsHousesDisabled(true));
    dispatch(setHouseInputValue(''));
    dispatch(setIsShowHouses(false));
  };

  const disableApartmentSelect = () => {
    dispatch(setIsApartmentsDisabled(true));
    dispatch(setApartmentInputValue(''));
    dispatch(setIsShowApartments(false));
  };

  const searchStreet = (event) => {
    const { value } = event.target;
    dispatch(setStreetInputValue(value));
    if (!value) {
      dispatch(resetFilteredStreets());
      disableHouseSelect();
      disableApartmentSelect();
    }
    dispatch(setFilteredStreets(value));
  };

  const showOptions = () => {
    dispatch(setIsShowStreets(true));
  };

  const toggleShowOptions = () => {
    dispatch(setIsShowStreets(!isShow));
  };

  return (
    <Select
      inputValue={inputValue}
      options={filteredStreets}
      placeholder="Улица"
      selectType="street_select"
      searchOption={searchStreet}
      setSelectedOption={selectSreet}
      showOptions={showOptions}
      toggleShowOptions={toggleShowOptions}
      isShow={isShow}
    />
  );
};

export default StreetSelect;
