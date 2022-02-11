import React from 'react';
import { useSelector } from 'react-redux';
import { resetFilteredStreets, setFilteredStreets, setSelectedStreetId } from '../../redux/reducers/streetReducer';
import Select from '../Select/Select';

import styles from './StreetSelect.module.css';

const StreetSelect = () => {
  const { filteredStreets } = useSelector((state) => ({
    filteredStreets: state.streetReducer.filteredStreets,
  }));

  return (
    <Select
      options={filteredStreets}
      placeholder="Улица"
      selectType="street_select"
      resetFilteredOptions={resetFilteredStreets}
      setFilteredOptions={setFilteredStreets}
      setSelectedOptionId={setSelectedStreetId}
    />
  );
};

export default StreetSelect;
