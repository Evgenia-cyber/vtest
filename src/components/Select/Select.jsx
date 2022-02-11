import React from 'react';
import Option from '../Option/Option';

import styles from './Select.module.css';

const Select = ({ options, placeholder, value, onChangeHandler, onClickHandler, isDisabled = false }) => (
  <>
    <input type="text" disabled={isDisabled} placeholder={placeholder} value={value} onChange={onChangeHandler} />
    {options.length > 0 && (
      <ul>
        {options.map((option) => (
          <Option key={option.id} label={option.name} id={option.id} onClickHandler={onClickHandler} />
        ))}
      </ul>
    )}
  </>
);

export default Select;
