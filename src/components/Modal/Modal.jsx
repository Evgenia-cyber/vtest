import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MODAL } from '../../constants';
import { createUser, deleteUser, editUser } from '../../redux/reducers/userReducer';

import styles from './Modal.module.css';

const Modal = ({ type, setIsShowModal, initData }) => {
  const dispatch = useDispatch();

  const { addressId, currentUser } = useSelector((state) => ({
    addressId: state.userReducer.addressId,
    currentUser: state.userReducer.currentUser,
  }));

  const isRemoveModal = type === MODAL.remove.type;
  const isEditModal = type === MODAL.edit.type;

  const [data, setData] = React.useState(initData);

  const onCancelHandler = () => {
    setIsShowModal(false);
  };

  const submitBtnText = MODAL[type].btnText;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsShowModal(false);
    if (isRemoveModal) {
      dispatch(deleteUser(currentUser.bindId, currentUser.id, addressId));
    } else if (isEditModal) {
      dispatch(editUser(data, addressId, currentUser.id, currentUser.bindId));
    } else {
      dispatch(createUser(data, addressId));
    }
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
        {isRemoveModal ? (
          <p>Вы действительно хотите выписать жильца из квартиры?</p>
        ) : (
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
        )}
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
