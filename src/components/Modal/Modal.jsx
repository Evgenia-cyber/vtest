import React from 'react';
import { useDispatch } from 'react-redux';
import { SUBMIT_BTN } from '../../constants';
import { setIsShowModal } from '../../redux/reducers/commonReducer';

import styles from './Modal.module.css';

const Modal = ({ type }) => {
  const dispatch = useDispatch();

  const [data, setData] = React.useState({
    name: '',
    email: '',
    tel: '',
  });

  const onCancelHandler = () => {
    console.log('cancel');
    dispatch(setIsShowModal(false));
  };

  const submitBtnText = SUBMIT_BTN[type];

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submit');
    dispatch(setIsShowModal(false));
  };

  const onInputChange = (event) => {
    const { value, name } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.modal_wrap} onClick={onCancelHandler}>
      <form
        className={styles.form}
        onSubmit={onSubmitHandler}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {/* <p>Вы действительно хотите выписать жильца (Иванов Иван Иванович) из квартиры №7?</p> */}
        <div className={styles.inputs}>
          <input
            className={styles.name}
            type="text"
            placeholder="Введите ФИО"
            value={data.name}
            name="name"
            onChange={onInputChange}
          />
          <input
            className={styles.email}
            type="email"
            placeholder="Введите email"
            value={data.email}
            name="email"
            onChange={onInputChange}
          />
          <input
            className={styles.tel}
            type="tel"
            pattern="[0-9]*"
            placeholder="Введите телефон"
            required
            value={data.tel}
            name="tel"
            onChange={onInputChange}
          />
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
