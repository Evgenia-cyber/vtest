import { addressAPI } from '../../api/api';
import { getStreetsData, searchMatches } from '../../utils/utils';
import { setIsLoading } from './commonReducer';

const SET_STREETS = 'vtest/street/SET_STREETS';
const SET_FILTERED_STREETS = 'vtest/street/SET_FILTERED_STREETS';
const RESET_FILTERED_STREETS = 'vtest/street/RESET_FILTERED_STREETS';
const SET_INPUT_VALUE = 'vtest/street/SET_INPUT_VALUE';
const SET_IS_SHOW = 'vtest/street/SET_IS_SHOW';

let initialState = {
  streets: [],
  filteredStreets: [],
  inputValue: '',
  isShow: false,
};

const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STREETS:
      return {
        ...state,
        streets: action.payload,
        filteredStreets: action.payload,
      };
    case SET_FILTERED_STREETS:
      return {
        ...state,
        filteredStreets: searchMatches(state.streets, action.payload),
      };
    case RESET_FILTERED_STREETS:
      return { ...state, filteredStreets: state.streets };
    case SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case SET_IS_SHOW:
      return { ...state, isShow: action.payload };
    default:
      return state;
  }
};

export const setStreets = (streets) => ({
  type: SET_STREETS,
  payload: streets,
});
export const setFilteredStreets = (text) => ({
  type: SET_FILTERED_STREETS,
  payload: text,
});
export const resetFilteredStreets = () => ({
  type: RESET_FILTERED_STREETS,
});
export const setStreetInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  payload: value,
});
export const setIsShowStreets = (isShow) => ({
  type: SET_IS_SHOW,
  payload: isShow,
});

export const fetchStreets = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const { data } = await addressAPI.getStreets();
    const streets = getStreetsData(data);
    dispatch(setStreets(streets));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default streetReducer;
