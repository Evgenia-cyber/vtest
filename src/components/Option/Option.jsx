import React from 'react';
import styles from './Option.module.css';

const Option = ({ label, id, onClickHandler }) => (
  <li className={styles.option} id={id} onClick={() => onClickHandler(id, label)}>
    {label}
  </li>
);

export default Option;
