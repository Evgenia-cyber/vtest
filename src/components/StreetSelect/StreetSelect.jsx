import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { resetFilteredStreets, setFilteredStreets } from '../../redux/reducers/addressReducer';
import Select from '../Select/Select';

import styles from './StreetSelect.module.css';

const StreetSelect = () => {
  const dispatch = useDispatch();

  const { filteredStreets, selectedStreet } = useSelector((state) => ({
    filteredStreets: state.addressReducer.filteredStreets,
    selectedStreet: state.addressReducer.selectedStreet,
  }));

  const [inputValue, setInputValue] = React.useState('');

  const searchStreet = (event) => {
    const { value } = event.target;
    setInputValue(value);
    if (value === '') {
      dispatch(resetFilteredStreets());
    }
    dispatch(setFilteredStreets(value));
  };

  const selectStreet = (id, label) => {
    console.log(1, label, id);
  };

  return (
    <Select
      options={filteredStreets}
      placeholder="Улица"
      value={inputValue}
      onChangeHandler={searchStreet}
      onClickHandler={selectStreet}
    />
  );
};

export default StreetSelect;
