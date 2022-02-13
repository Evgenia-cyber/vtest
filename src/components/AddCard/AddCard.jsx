import React from 'react';
import { useSelector } from 'react-redux';
import { setIsShowModal } from '../../redux/reducers/commonReducer';
import Modal from '../Modal/Modal';
import ImageBtn from '../ImageBtn/ImageBtn';
import addImg from '../../assets/icons/add.svg';

import styles from './AddCard.module.css';
import { useDispatch } from 'react-redux';

const AddCard = () => {
  const dispatch = useDispatch();

  const { isShowModal } = useSelector((state) => ({
    isShowModal: state.commonReducer.isShowModal,
  }));
  console.log('isShowModal', isShowModal);

  const addUser = () => {
    console.log('add');
    dispatch(setIsShowModal(true));
  };

  return (
    <div className={styles.card_wrap}>
      <ImageBtn src={addImg} alt="Добавить" onImageBtnClick={addUser} className="add" />
      {isShowModal && <Modal type="add" />}
    </div>
  );
};

export default AddCard;
