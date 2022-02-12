import { addressAPI } from '../../api/api';
import { searchMatches } from '../../utils/utils';
import { setIsLoading } from './commonReducer';

const SET_HOUSES = 'vtest/house/SET_HOUSES';
const SET_FILTERED_HOUSES = 'vtest/house/SET_FILTERED_HOUSES';
const RESET_FILTERED_HOUSES = 'vtest/house/RESET_FILTERED_HOUSES';
const SET_IS_DISABLED = 'vtest/house/SET_IS_DISABLED';
const SET_INPUT_VALUE = 'vtest/house/SET_INPUT_VALUE';
const SET_IS_SHOW = 'vtest/house/SET_IS_SHOW';

let initialState = {
  houses: [],
  isDisabled: true,
  filteredHouses: [],
  inputValue: '',
  isShow: false,
};

const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOUSES:
      return {
        ...state,
        houses: action.payload,
        filteredHouses: action.payload,
      };
    case SET_FILTERED_HOUSES:
      return {
        ...state,
        filteredHouses: searchMatches(state.houses, action.payload),
      };
    case RESET_FILTERED_HOUSES:
      return { ...state, filteredHouses: state.houses };
    case SET_IS_DISABLED:
      return { ...state, isDisabled: action.payload };
    case SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case SET_IS_SHOW:
      return { ...state, isShow: action.payload };
    default:
      return state;
  }
};

export const setHouses = (houses) => ({
  type: SET_HOUSES,
  payload: houses,
});
export const setFilteredHouses = (text) => ({
  type: SET_FILTERED_HOUSES,
  payload: text,
});
export const resetFilteredHouses = () => ({
  type: RESET_FILTERED_HOUSES,
});
export const setIsHousesDisabled = (isDisabled) => ({
  type: SET_IS_DISABLED,
  payload: isDisabled,
});
export const setHouseInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  payload: value,
});
export const setIsShowHouses = (isShow) => ({
  type: SET_IS_SHOW,
  payload: isShow,
});

export const fetchHouses = (streetId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const { data } = await addressAPI.getHouses(streetId);
    dispatch(setHouses(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default houseReducer;
