import React from 'react';
import ImageBtn from '../ImageBtn/ImageBtn';
import addImg from '../../assets/icons/add.svg';

import styles from './AddCard.module.css';

const AddCard = () => {
  const addUser = () => {
    console.log('add');
  };

  return (
    <div className={styles.card_wrap}>
      <ImageBtn src={addImg} alt="Добавить" onImageBtnClick={addUser} className="add" />
    </div>
  );
};

export default AddCard;
