import { addressAPI } from '../../api/api';
import { getStreetsData } from '../../utils/utils';

const SET_STREETS = 'vtest/address/SET_STREETS';
const IS_LOADING = 'vtest/address/IS_LOADING';

let initialState = {
  streets: [],
  isLoading: false,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_STREETS:
      return {
        ...state,
        streets: action.payload,
      };
    default:
      return state;
  }
};

export const setStreets = (streets) => ({
  type: SET_STREETS,
  payload: streets,
});
export const setIsLoading = (isLoading) => ({
  type: IS_LOADING,
  payload: isLoading,
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

export default addressReducer;
