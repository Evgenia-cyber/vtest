import * as axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from '../constants';

const instance = axios.create({
  baseURL: API_BASE_URL,
});

export const addressAPI = {
  getStreets: () => instance.get(`${ENDPOINTS.request}/streets`),
  getHouses: (streetId) => instance.get(`${ENDPOINTS.request}/houses/${streetId}`),
  getApartments: (apartmentId) => instance.get(`${ENDPOINTS.request}/house_flats/${apartmentId}`),
};
