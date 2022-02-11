import React from 'react';
import { useDispatch } from 'react-redux';
import ImageBtn from '../ImageBtn/ImageBtn';
import Option from '../Option/Option';
import arrowImg from '../../assets/icons/arrow.svg';

import styles from './Select.module.css';

const Select = ({
  options,
  placeholder,
  isDisabled = false,
  selectType = 'address_select',
  resetFilteredOptions,
  setFilteredOptions,
  setSelectedOption,
}) => {
  const dispatch = useDispatch();

  const [isShow, setIsShow] = React.useState(false);

  const [inputValue, setInputValue] = React.useState('');

  const searchOption = (event) => {
    const { value } = event.target;
    setInputValue(value);
    if (value === '') {
      dispatch(resetFilteredOptions());
    }
    dispatch(setFilteredOptions(value));
  };

  const toggleShowOptions = () => {
    setIsShow(!isShow);
  };

  const showOptions = () => {
    setIsShow(true);
  };

  const onOptionClickHandler = (id, label) => {
    setIsShow(false);
    setInputValue(label);
    setSelectedOption(id);
  };

  return (
    <div className={styles[selectType]}>
      <div className={styles.input_wrap}>
        <input
          className={styles.input}
          type="text"
          disabled={isDisabled}
          placeholder={placeholder}
          value={inputValue}
          onChange={searchOption}
          onFocus={showOptions}
        />
        <ImageBtn
          src={arrowImg}
          alt={isShow ? 'Скрыть' : 'Показать'}
          onImageBtnClick={toggleShowOptions}
          className={isShow ? 'up' : 'down'}
        />
      </div>
      <div className={isShow ? styles.list_wrap_active : styles.list_wrap}>
        {options.length > 0 && (
          <ul className={styles.list}>
            {options.map((option) => (
              <Option key={option.id} label={option.name} id={option.id} onClickHandler={onOptionClickHandler} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
