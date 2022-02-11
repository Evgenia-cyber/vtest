import { addressAPI } from '../../api/api';
import { NO_SELECTED_INDEX } from '../../constants';
import { getStreetsData, searchMatches } from '../../utils/utils';
import { setIsLoading } from './commonReducer';

const SET_STREETS = 'vtest/street/SET_STREETS';
const SET_FILTERED_STREETS = 'vtest/street/SET_FILTERED_STREETS';
const RESET_FILTERED_STREETS = 'vtest/street/RESET_FILTERED_STREETS';

let initialState = {
  streets: [],
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
