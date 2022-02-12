import React from 'react';
import ImageBtn from '../ImageBtn/ImageBtn';
import Option from '../Option/Option';
import arrowImg from '../../assets/icons/arrow.svg';

import styles from './Select.module.css';

const Select = ({
  inputValue,
  options,
  placeholder,
  isDisabled = false,
  selectType = 'address_select',
  searchOption,
  setSelectedOption,
}) => {
  const [isShow, setIsShow] = React.useState(false);

  const toggleShowOptions = () => {
    setIsShow(!isShow);
  };

  const showOptions = () => {
    setIsShow(true);
  };

  const onOptionClickHandler = (id, label) => {
    setIsShow(false);
    setSelectedOption(id, label);
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
          isDisabled={isDisabled}
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
