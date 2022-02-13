import React from 'react';
import Modal from '../Modal/Modal';
import ImageBtn from '../ImageBtn/ImageBtn';
import addImg from '../../assets/icons/add.svg';
import { MODAL, MODAL_EMPTY_DATA } from '../../constants';

import styles from './AddCard.module.css';

const AddCard = () => {
  const [isShowModal, setIsShowModal] = React.useState(false);

  const addUser = () => {
    setIsShowModal(true);
  };

  return (
    <div className={styles.card_wrap}>
      <ImageBtn src={addImg} alt="Добавить" onImageBtnClick={addUser} className="add" />
      {isShowModal && <Modal type={MODAL.add.type} setIsShowModal={setIsShowModal} initData={MODAL_EMPTY_DATA} />}
    </div>
  );
};

export default AddCard;
