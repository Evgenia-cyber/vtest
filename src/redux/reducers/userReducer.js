import { userAPI } from '../../api/api';
import { NO_ADDRESS } from '../../constants';
import { setIsLoading } from './commonReducer';

const SET_USERS = 'vtest/user/SET_USERS';
const SET_ADDRESS = 'vtest/user/SET_ADDRESS';

const initialState = {
  users: [],
  address: { id: NO_ADDRESS, name: '' },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setAddress = (apartment) => ({
  type: SET_ADDRESS,
  payload: apartment,
});

export const fetchAllUsers = (apartmentId, apartmentNumber) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    dispatch(setAddress({ apartmentId, apartmentNumber }));
    const { data } = await userAPI.getAllUsers(apartmentId);
    dispatch(setUsers(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default userReducer;
