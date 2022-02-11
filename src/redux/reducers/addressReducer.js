import { addressAPI } from '../../api/api';
import { getStreetsData, searchMatches } from '../../utils/utils';

const SET_STREETS = 'vtest/address/SET_STREETS';
const SET_FILTERED_STREETS = 'vtest/address/SET_FILTERED_STREETS';
const RESET_FILTERED_STREETS = 'vtest/address/RESET_FILTERED_STREETS';
const IS_LOADING = 'vtest/address/IS_LOADING';
const SET_SELECTED_STREET = 'vtest/address/SET_SELECTED_STREET';

let initialState = {
  streets: [],
  isLoading: false,
  selectedStreet: { id: -1, name: '' },
  filteredStreets: [],
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
        filteredStreets: action.payload,
      };
    case SET_FILTERED_STREETS:
      return {
        ...state,
        filteredStreets: searchMatches(state.streets, action.payload),
      };
    case RESET_FILTERED_STREETS:
      return { ...state, filteredStreets: state.streets };
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
