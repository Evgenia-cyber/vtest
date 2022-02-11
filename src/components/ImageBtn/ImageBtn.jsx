import React from 'react';

import styles from './ImageBtn.module.css';

const ImageBtn = ({ src, alt, onImageBtnClick, className = '' }) => (
  <button className={styles.button}>
    <img className={styles[className]} src={src} alt={alt} onClick={onImageBtnClick} />
  </button>
);

export default ImageBtn;
