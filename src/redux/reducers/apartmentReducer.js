import { addressAPI } from '../../api/api';
import { getApartmentsData, searchMatches } from '../../utils/utils';
import { setIsLoading } from './commonReducer';

const SET_APARTMENTS = 'vtest/apartament/SET_APARTMENTS';
const SET_FILTERED_APARTMENTS = 'vtest/apartament/SET_FILTERED_APARTMENTS';
const RESET_FILTERED_APARTMENTS = 'vtest/apartament/RESET_FILTERED_APARTMENTS';
const SET_IS_DISABLED = 'vtest/apartament/SET_IS_DISABLED';
const SET_INPUT_VALUE = 'vtest/apartament/SET_INPUT_VALUE';

let initialState = {
  apartments: [],
  isDisabled: true,
  filteredApartments: [],
  inputValue: '',
};

const apartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APARTMENTS:
      return {
        ...state,
        apartments: action.payload,
        filteredApartments: action.payload,
      };
    case SET_FILTERED_APARTMENTS:
      return {
        ...state,
        filteredApartments: searchMatches(state.apartments, action.payload),
      };
    case RESET_FILTERED_APARTMENTS:
      return { ...state, filteredApartments: state.houses };
    case SET_IS_DISABLED:
      return { ...state, isDisabled: action.payload };
    case SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

export const setApartments = (apartments) => ({
  type: SET_APARTMENTS,
  payload: apartments,
});
export const setFilteredApartaments = (text) => ({
  type: SET_FILTERED_APARTMENTS,
  payload: text,
});
export const resetFilteredApartments = () => ({
  type: RESET_FILTERED_APARTMENTS,
});
export const setIsApartmentsDisabled = (isDisabled) => ({
  type: SET_IS_DISABLED,
  payload: isDisabled,
});
export const setApartmentInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  payload: value,
});

export const fetchApartments = (apartmentId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const { data } = await addressAPI.getApartments(apartmentId);
    const apartments = getApartmentsData(data);
    dispatch(setApartments(apartments));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default apartmentReducer;
