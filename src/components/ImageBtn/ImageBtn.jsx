import React from 'react';

import styles from './ImageBtn.module.css';

const ImageBtn = ({ src, alt, onImageBtnClick, className = '', isDisabled = false }) => (
  <button className={styles.button} disabled={isDisabled} onClick={onImageBtnClick}>
    <img className={styles[className]} src={src} alt={alt} />
  </button>
);

export default ImageBtn;
