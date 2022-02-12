import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  fetchApartments,
  setApartmentInputValue,
  setIsApartmentsDisabled,
  setIsShowApartments,
} from '../../redux/reducers/apartmentReducer';
import {
  resetFilteredHouses,
  setFilteredHouses,
  setHouseInputValue,
  setIsShowHouses,
} from '../../redux/reducers/houseReducer';
import Select from '../Select/Select';

import styles from './HouseSelect.module.css';

const HouseSelect = () => {
  const dispatch = useDispatch();

  const { filteredHouses, isDisabled, inputValue, isShow } = useSelector((state) => ({
    filteredHouses: state.houseReducer.filteredHouses,
    isDisabled: state.houseReducer.isDisabled,
    inputValue: state.houseReducer.inputValue,
    isShow: state.houseReducer.isShow,
  }));

  const selectHouse = (id, label) => {
    dispatch(setIsShowHouses(false));
    dispatch(setHouseInputValue(label));
    dispatch(fetchApartments(id));
    dispatch(setIsApartmentsDisabled(false));
  };

  const disableApartmentSelect = () => {
    dispatch(setIsApartmentsDisabled(true));
    dispatch(setApartmentInputValue(''));
    dispatch(setIsShowApartments(false));
  };

  const searchHouse = (event) => {
    const { value } = event.target;
    dispatch(setHouseInputValue(value));
    if (!value) {
      dispatch(resetFilteredHouses());
      disableApartmentSelect();
    }
    dispatch(setFilteredHouses(value));
  };

  const showOptions = () => {
    dispatch(setIsShowHouses(true));
  };

  const toggleShowOptions = () => {
    dispatch(setIsShowHouses(!isShow));
  };

  return (
    <Select
      inputValue={inputValue}
      options={filteredHouses}
      placeholder="Дом"
      searchOption={searchHouse}
      setSelectedOption={selectHouse}
      isDisabled={isDisabled}
      showOptions={showOptions}
      toggleShowOptions={toggleShowOptions}
      isShow={isShow}
    />
  );
};

export default HouseSelect;
