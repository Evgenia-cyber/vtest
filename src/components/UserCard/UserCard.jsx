import React from 'react';
import { useDispatch } from 'react-redux';
import ImageBtn from '../ImageBtn/ImageBtn';
import editImg from '../../assets/icons/edit.svg';
import removeImg from '../../assets/icons/remove.svg';
import { setCurrentUser } from '../../redux/reducers/userReducer';
import Modal from '../Modal/Modal';
import { MODAL } from '../../constants';

import styles from './UserCard.module.css';

const UserCard = ({ id, name, phone, email, bindId }) => {
  const dispatch = useDispatch();

  const [type, setType] = React.useState(MODAL.edit.type);

  const [isShowModal, setIsShowModal] = React.useState(false);

  const currentUserData = {
    name,
    email,
    tel: phone,
  };

  const removeUser = () => {
    setType(MODAL.remove.type);
    setIsShowModal(true);
    dispatch(setCurrentUser({ id, name, phone, email, bindId }));
  };

  const editUser = () => {
    setType(MODAL.edit.type);
    setIsShowModal(true);
    dispatch(setCurrentUser({ id, name, phone, email, bindId }));
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
      {isShowModal && <Modal type={type} setIsShowModal={setIsShowModal} initData={currentUserData} />}
    </div>
  );
};

export default UserCard;
