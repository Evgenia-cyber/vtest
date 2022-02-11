import { addressAPI } from '../../api/api';
import { getStreetsData, searchMatches } from '../../utils/utils';
import { setIsLoading } from './commonReducer';

const SET_STREETS = 'vtest/street/SET_STREETS';
const SET_FILTERED_STREETS = 'vtest/street/SET_FILTERED_STREETS';
const RESET_FILTERED_STREETS = 'vtest/street/RESET_FILTERED_STREETS';
const SET_SELECTED_STREET = 'vtest/street/SET_SELECTED_STREET';

let initialState = {
  streets: [],
  selectedStreetId: -1,
  filteredStreets: [],
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
    case SET_SELECTED_STREET:
      return { ...state, selectedStreetId: action.payload };
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
export const setSelectedStreetId = (id) => ({
  type: SET_SELECTED_STREET,
  payload: id,
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
