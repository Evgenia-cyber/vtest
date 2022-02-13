import * as axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from '../constants';

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'text/plain',
  },
});

export const addressAPI = {
  getStreets: () => instance.get(`${ENDPOINTS.request}streets`),
  getHouses: (streetId) => instance.get(`${ENDPOINTS.request}houses/${streetId}`),
  getApartments: (houseId) => instance.get(`${ENDPOINTS.request}house_flats/${houseId}`),
};

export const userAPI = {
  getAllUsers: (apartmentId) => instance.get(`${ENDPOINTS.housing}clients?addressId=${apartmentId}`),
  createUser: (body) => instance.post(`${ENDPOINTS.housing}client`, body),
  bindUser: (body) => instance.put(`${ENDPOINTS.housing}bind_client`, body),
  deleteUser: (id) => instance.delete(`${ENDPOINTS.housing}bind_client/${id}`),
};
