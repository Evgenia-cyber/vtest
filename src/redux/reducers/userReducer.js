import { userAPI } from '../../api/api';
import { NO_ADDRESS, OK, OK_STATUS } from '../../constants';
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
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
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

const create =
  ({ name, email, tel }, addressId) =>
  async (dispatch) => {
    const body = {
      name,
      phone: tel,
      email,
      bindId: addressId,
    };
    const { data } = await userAPI.createUser(body);
    const { id, result } = data;
    if (result === OK) {
      await userAPI.bindUser({
        addressId,
        clientId: id,
      });
      dispatch(fetchAllUsers(addressId));
    }
  };

const remove = async (bindId, userId) => {
  await userAPI.deleteUser(bindId);
  await userAPI.deleteUser(userId);
};

export const createUser =
  ({ name, email, tel }, addressId) =>
  async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const res = await userAPI.getUser(tel);
      if (res.status !== OK_STATUS) {
        dispatch(create({ name, email, tel }, addressId));
      } else {
        alert('Пользователь с таким номером телефона уже существует!');
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const editUser =
  ({ name, email, tel }, addressId, userId, bindId) =>
  async (dispatch) => {
    try {
      await remove(bindId, userId);
      dispatch(create({ name, email, tel }, addressId));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const deleteUser = (bindId, userId, addressId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    await remove(bindId, userId);
    dispatch(fetchAllUsers(addressId));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default userReducer;
