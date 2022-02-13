import { userAPI } from '../../api/api';
import { NO_ADDRESS, OK } from '../../constants';
import { setIsLoading } from './commonReducer';

const SET_USERS = 'vtest/user/SET_USERS';
const SET_ADDRESS_ID = 'vtest/user/SET_ADDRESS_ID';
const SET_CURRENT_USER = 'vtest/user/SET_CURRENT_USER';

const initialState = {
  users: [],
  addressId: NO_ADDRESS,
  currentUser: {},
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
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
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

export const createUser =
  ({ name, email, tel }, addressId) =>
  async (dispatch) => {
    dispatch(setIsLoading(true));
    const body = {
      name,
      phone: tel,
      email,
      addressId,
    };
    try {
      const { data } = await userAPI.createUser(body);
      const { id, result } = data;
      if (result === OK) {
        await userAPI.bindUser({
          addressId,
          clientId: id,
        });
        dispatch(fetchAllUsers(addressId));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export default userReducer;
