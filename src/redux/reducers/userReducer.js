import { userAPI } from '../../api/api';
import { NO_ADDRESS } from '../../constants';
import { setIsLoading } from './commonReducer';

const SET_USERS = 'vtest/user/SET_USERS';
const SET_ADDRESS_ID = 'vtest/user/SET_ADDRESS_ID';

const initialState = {
  users: [],
  addressId: NO_ADDRESS,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_ADDRESS_ID:
      return {
        ...state,
        addressId: action.payload,
      };
    default:
      return state;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setAddressId = (apartmentId) => ({
  type: SET_ADDRESS_ID,
  payload: apartmentId,
});

export const fetchAllUsers = (apartmentId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    dispatch(setAddressId(apartmentId));
    const { data } = await userAPI.getAllUsers(apartmentId);
    dispatch(setUsers(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default userReducer;
