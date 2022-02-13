import React from 'react';
import ImageBtn from '../ImageBtn/ImageBtn';
import editImg from '../../assets/icons/edit.svg';
import removeImg from '../../assets/icons/remove.svg';

import styles from './UserCard.module.css';

const UserCard = ({ name, phone, email, userId, bindId }) => {
  const removeUser = () => {
    console.log('remove', userId, bindId);
  };

  const editUser = () => {
    console.log('edit');
  };

  return (
    <div className={styles.card_wrap}>
      <div>
        <p>{name}</p>
        <p className={styles.phone}>{phone}</p>
        <p className={styles.email}>{email}</p>
      </div>
      <div className={styles.buttons}>
        <ImageBtn src={removeImg} alt="Удалить" onImageBtnClick={removeUser} />
        <ImageBtn src={editImg} alt="Изменить" onImageBtnClick={editUser} />
      </div>
    </div>
  );
};

export default UserCard;
