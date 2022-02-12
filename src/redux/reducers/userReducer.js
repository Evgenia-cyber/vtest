import { userAPI } from '../../api/api';
import { setApartments } from './apartmentReducer';
import { setIsLoading } from './commonReducer';

const SET_USERS = 'vtest/user/SET_USERS';

let initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const fetchAllUsers = (apartmentId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const { data } = await userAPI.getAllUsers(apartmentId);
    dispatch(setUsers(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default userReducer;
