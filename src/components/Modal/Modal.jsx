import React from 'react';
import { useDispatch } from 'react-redux';
import { SUBMIT_BTN } from '../../constants';
import { setIsShowModal } from '../../redux/reducers/commonReducer';

import styles from './Modal.module.css';

const Modal = ({ type }) => {
  const dispatch = useDispatch();

  const onCancelHandler = () => {
    console.log('cancel');
    dispatch(setIsShowModal(false));
  };

  const submitBtnText = SUBMIT_BTN[type];

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <div className={styles.modal_wrap} onClick={onCancelHandler}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        {/* <p>Вы действительно хотите выписать жильца (Иванов Иван Иванович) из квартиры №7?</p> */}
        <div className={styles.inputs}>
          <input className={styles.name} type="text" placeholder="Введите ФИО" />
          <input className={styles.email} type="email" placeholder="Введите email" />
          <input className={styles.tel} type="tel" pattern="[0-9]*" placeholder="Введите телефон" required />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            {submitBtnText}
          </button>
          <button type="button" className={styles.button} onClick={onCancelHandler}>
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
